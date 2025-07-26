/**
 * BribeYourselfFit - JSONBin.io Cloud Version
 *
 * This version uses JSONBin.io for cloud storage instead of localStorage.
 * Data is automatically synced to the cloud on every save.
 * 
 * Key differences from localStorage version:
 * - API key setup during initial configuration
 * - All data operations use JSONBin.io REST API
 * - Real-time cloud synchronization
 * - Network error handling and retry logic
 */

class BribeYourselfFit {
  constructor() {
    // Initialize app state
    this.currentUser = null;
    this.dailyLogs = {};
    this.streaks = {};
    this.customRewards = [];
    this.achievements = [];
    this.defaultMilestones = [];
    this.currentTab = 'dashboard';
    this.chartPeriod = 7;
    this.currentDate = new Date().toISOString().split('T')[0];

    // JSONBin.io configuration
    this.jsonbinConfig = {
      apiKey: null,
      binId: null,
      binName: null,
      baseUrl: 'https://api.jsonbin.io/v3'
    };

    // Data validation ranges
    this.validationRanges = {
      weight: { min: 50, max: 1000 },
      steps: { min: 0, max: 50000 },
      exercise: { min: 0, max: 300 },
      water: { min: 0, max: 10 },
    };

    // Initialize the application
    this.init();
  }

  /**
   * Update wellness score display
   */
  updateWellnessScore() {
    const checkedBoxes = document.querySelectorAll('.wellness-checkbox:checked');
    const score = checkedBoxes.length;

    // Update score indicators
    const indicators = document.querySelectorAll('.score-indicator');
    indicators.forEach((indicator, index) => {
      if (index < score) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });

    // Update score text
    const scoreText = document.getElementById('wellnessScoreText');
    if (scoreText) {
      scoreText.textContent = `${score}/5`;
    }

    // Update wellness items styling
    const wellnessItems = document.querySelectorAll('.wellness-item');
    wellnessItems.forEach((item, index) => {
      const checkbox = item.querySelector('.wellness-checkbox');
      if (checkbox && checkbox.checked) {
        item.classList.add('completed');
      } else {
        item.classList.remove('completed');
      }
    });
  }

  /**
   * Update exercise type selection styling
   */
  updateExerciseSelection() {
    const exerciseOptions = document.querySelectorAll('.exercise-option');
    exerciseOptions.forEach((option) => {
      const checkbox = option.querySelector('.exercise-checkbox');
      if (checkbox && checkbox.checked) {
        option.classList.add('selected');
      } else {
        option.classList.remove('selected');
      }
    });
  }

  /**
   * Switch between tabs
   */
  switchTab(tabName) {
    this.currentTab = tabName;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach((btn) => {
      if (btn.dataset.tab === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach((content) => {
      if (content.id === `${tabName}Tab`) {
        content.classList.remove('hidden');
        content.classList.add('active');
        content.style.display = 'block';
      } else {
        content.classList.add('hidden');
        content.classList.remove('active');
        content.style.display = 'none';
      }
    });

    // Load tab-specific content
    try {
      if (tabName === 'charts') {
        this.loadChartsTab();
      } else if (tabName === 'rewards') {
        this.loadRewardsTab();
      }
    } catch (error) {
      console.error(`Error loading ${tabName} tab:`, error);
    }
  }

  /**
   * Load charts tab content
   */
  loadChartsTab() {
    const isMobile = window.innerWidth <= 768;
    const delay = isMobile ? 300 : 100;

    requestAnimationFrame(() => {
      setTimeout(() => {
        try {
          if (isMobile) {
            this.renderWeightChart();
            setTimeout(() => this.renderActivityChart(), 150);
            setTimeout(() => this.renderStreakCalendar(), 300);
          } else {
            this.renderWeightChart();
            this.renderActivityChart();
            this.renderStreakCalendar();
          }
        } catch (error) {
          console.error('Error rendering charts:', error);
        }
      }, delay);
    });
  }

  /**
   * Initialize default milestones
   */
  initializeDefaultMilestones() {
    this.defaultMilestones = [
      // Streak milestones
      { type: 'streak', value: 7, title: '7 Day Streak', description: 'Complete 7 consecutive days of goals' },
      { type: 'streak', value: 14, title: '2 Week Streak', description: 'Complete 14 consecutive days of goals' },
      { type: 'streak', value: 30, title: '30 Day Streak', description: 'Complete 30 consecutive days of goals' },
      { type: 'streak', value: 50, title: '50 Day Streak', description: 'Complete 50 consecutive days of goals' },
      { type: 'streak', value: 100, title: '100 Day Streak', description: 'Complete 100 consecutive days of goals' },
      // Weight loss milestones
      ...this.generateWeightMilestones(),
    ];
  }

  /**
   * Generate weight loss milestones based on user's goals
   */
  generateWeightMilestones() {
    if (!this.currentUser) return [];

    const milestones = [];
    const totalWeightToLose = this.currentUser.startingWeight - this.currentUser.goalWeight;

    if (totalWeightToLose <= 0) return milestones;

    // 10 lb milestones
    for (let lost = 10; lost <= totalWeightToLose; lost += 10) {
      milestones.push({
        type: 'weight',
        value: lost,
        title: `${lost} lbs Lost`,
        description: `Lost ${lost} pounds from starting weight`,
      });
    }

    return milestones;
  }

  /**
   * Handle custom reward form submission
   */
  async handleCustomReward(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const rewardType = formData.get('rewardType');
    const description = formData.get('rewardDescription');

    if (!rewardType || !description) {
      this.showError('Please fill in all required fields');
      return;
    }

    const reward = {
      type: rewardType,
      description: description,
      createdDate: new Date().toISOString(),
    };

    // Add type-specific criteria
    if (rewardType === 'streak') {
      reward.streakDays = parseInt(formData.get('streakDays'));
      if (!reward.streakDays || reward.streakDays < 1) {
        this.showError('Please enter valid streak days');
        return;
      }
    } else if (rewardType === 'weight') {
      reward.weightLoss = parseFloat(formData.get('weightLoss'));
      if (!reward.weightLoss || reward.weightLoss < 0.1) {
        this.showError('Please enter valid weight loss amount');
        return;
      }
    } else if (rewardType === 'combo') {
      reward.streakDays = parseInt(formData.get('comboStreak'));
      reward.weightLoss = parseFloat(formData.get('comboWeight'));
      if (!reward.streakDays || !reward.weightLoss) {
        this.showError('Please enter valid streak days and weight loss');
        return;
      }
    }

    this.customRewards.push(reward);

    // Save to cloud
    this.showSyncStatus('🔄 Saving to cloud...');
    
    try {
      await this.saveDataToCloud();
      
      // Reset form and update display
      e.target.reset();
      this.updateRewardCriteria();
      this.renderCustomRewards();
      this.renderDefaultMilestones();
      
      this.showSuccess('Custom reward added and saved to cloud!');
      this.showSyncStatus('☁️ Synced');
    } catch (error) {
      console.error('Failed to save custom reward:', error);
      this.showError('Failed to save reward to cloud. Please try again.');
      this.showSyncStatus('❌ Sync failed');
    }
  }

  /**
   * Update reward criteria form visibility
   */
  updateRewardCriteria() {
    const rewardType = document.getElementById('rewardType').value;
    const criteriaElements = document.querySelectorAll('.reward-criteria');

    criteriaElements.forEach((el) => el.classList.add('hidden'));

    if (rewardType) {
      const targetCriteria = document.getElementById(`${rewardType}Criteria`);
      if (targetCriteria) {
        targetCriteria.classList.remove('hidden');
      }
    }
  }

  /**
   * Load rewards tab content
   */
  loadRewardsTab() {
    this.renderDefaultMilestones();
    this.renderCustomRewards();
    this.renderAchievementHistory();
  }

  /**
   * Render default milestones
   */
  renderDefaultMilestones() {
    const container = document.getElementById('defaultMilestones');
    if (!container) return;

    container.innerHTML = '';

    if (!this.defaultMilestones) {
      this.initializeDefaultMilestones();
    }

    if (!this.defaultMilestones || !Array.isArray(this.defaultMilestones)) {
      container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">Unable to load milestones. Please refresh the page.</p>';
      return;
    }

    this.defaultMilestones.forEach((milestone) => {
      const milestoneEl = this.createMilestoneElement(milestone);
      container.appendChild(milestoneEl);
    });
  }

  /**
   * Create milestone element
   */
  createMilestoneElement(milestone) {
    const el = document.createElement('div');
    el.className = 'milestone-item';

    const isAchieved = this.isMilestoneAchieved(milestone);
    const isClaimed = this.isMilestoneClaimedInAchievements(milestone);

    if (isAchieved && !isClaimed) {
      el.classList.add('achieved');
    } else if (isClaimed) {
      el.classList.add('claimed');
    }

    const statusText = isClaimed ? 'Claimed' : isAchieved ? 'Achieved' : 'Pending';
    const statusClass = isClaimed ? 'claimed' : isAchieved ? 'achieved' : 'pending';

    const customReward = this.getCustomRewardForMilestone(milestone);
    const rewardText = customReward ? customReward.description : 'Set custom reward...';

    el.innerHTML = `
      <div class="milestone-header">
        <div class="milestone-title">${milestone.title}</div>
        <div class="milestone-status ${statusClass}">${statusText}</div>
      </div>
      <div class="milestone-description">${milestone.description}</div>
      <div class="milestone-reward">
        <div class="reward-text">${rewardText}</div>
        ${isAchieved && !isClaimed ? `<button class="claim-btn" onclick="app.claimMilestone('${milestone.type}', ${milestone.value})">Claim Reward</button>` : ''}
      </div>
    `;

    return el;
  }

  /**
   * Check if milestone is achieved
   */
  isMilestoneAchieved(milestone) {
    if (milestone.type === 'streak') {
      return this.streaks.overall >= milestone.value;
    } else if (milestone.type === 'weight') {
      const weightLost = this.currentUser.startingWeight - this.currentUser.currentWeight;
      return weightLost >= milestone.value;
    }
    return false;
  }

  /**
   * Check if milestone has been claimed
   */
  isMilestoneClaimedInAchievements(milestone) {
    return this.achievements.some(
      (achievement) => achievement.type === milestone.type && achievement.value === milestone.value
    );
  }

  /**
   * Get custom reward for milestone
   */
  getCustomRewardForMilestone(milestone) {
    return this.customRewards.find(
      (reward) =>
        reward.type === milestone.type &&
        (reward.streakDays === milestone.value || reward.weightLoss === milestone.value)
    );
  }

  /**
   * Claim milestone reward
   */
  async claimMilestone(type, value) {
    const milestone = this.defaultMilestones.find((m) => m.type === type && m.value === value);
    if (!milestone || !this.isMilestoneAchieved(milestone)) return;

    // Add to achievements
    const achievement = {
      type: milestone.type,
      value: milestone.value,
      title: milestone.title,
      description: milestone.description,
      customReward: this.getCustomRewardForMilestone(milestone),
      claimedDate: new Date().toISOString(),
      claimedStreak: this.streaks.overall,
      claimedWeight: this.currentUser.currentWeight,
    };

    this.achievements.push(achievement);

    // Save to cloud
    this.showSyncStatus('🔄 Saving to cloud...');
    
    try {
      await this.saveDataToCloud();
      
      // Show celebration modal
      this.showAchievementModal(achievement);
      
      // Re-render displays
      this.renderDefaultMilestones();
      this.renderAchievementHistory();
      
      this.showSyncStatus('☁️ Synced');
    } catch (error) {
      console.error('Failed to save achievement:', error);
      this.showError('Failed to save achievement to cloud. Please try again.');
      this.showSyncStatus('❌ Sync failed');
    }
  }

  /**
   * Show achievement modal with celebration
   */
  showAchievementModal(achievement) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('achievementModal');
    if (!modal) {
      modal = this.createAchievementModal();
      document.body.appendChild(modal);
    }

    // Update modal content
    const title = modal.querySelector('.modal-title');
    const message = modal.querySelector('.modal-message');

    title.textContent = '🎉 Achievement Claimed!';

    const rewardText = achievement.customReward
      ? ` Enjoy your reward: ${achievement.customReward.description}`
      : ` Consider setting a custom reward for future milestones!`;

    message.textContent = `${achievement.title} - ${achievement.description}.${rewardText}`;

    // Show modal with celebration animation
    modal.classList.add('show');
    document.body.classList.add('celebrating');

    setTimeout(() => {
      document.body.classList.remove('celebrating');
    }, 600);
  }

  /**
   * Create achievement modal
   */
  createAchievementModal() {
    const modal = document.createElement('div');
    modal.id = 'achievementModal';
    modal.className = 'modal';

    modal.innerHTML = `
      <div class="modal-content">
        <h2 class="modal-title">Achievement!</h2>
        <p class="modal-message"></p>
        <button class="modal-btn" onclick="app.closeAchievementModal()">Awesome!</button>
      </div>
    `;

    return modal;
  }

  /**
   * Close achievement modal
   */
  closeAchievementModal() {
    const modal = document.getElementById('achievementModal');
    if (modal) {
      modal.classList.remove('show');
    }
  }

  /**
   * Render custom rewards list
   */
  renderCustomRewards() {
    const container = document.getElementById('customRewardsList');
    if (!container) return;

    container.innerHTML = '';

    if (this.customRewards.length === 0) {
      container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No custom rewards added yet.</p>';
      return;
    }

    this.customRewards.forEach((reward, index) => {
      const rewardEl = this.createCustomRewardElement(reward, index);
      container.appendChild(rewardEl);
    });
  }

  /**
   * Create custom reward element
   */
  createCustomRewardElement(reward, index) {
    const el = document.createElement('div');
    el.className = 'reward-item';

    let criteriaText = '';
    if (reward.type === 'streak') {
      criteriaText = `${reward.streakDays} day streak`;
    } else if (reward.type === 'weight') {
      criteriaText = `${reward.weightLoss} lbs lost`;
    } else if (reward.type === 'combo') {
      criteriaText = `${reward.streakDays} day streak + ${reward.weightLoss} lbs lost`;
    }

    el.innerHTML = `
      <div class="reward-info">
        <div class="reward-title">${reward.description}</div>
        <div class="reward-criteria-text">${criteriaText}</div>
      </div>
      <div class="reward-actions">
        <button class="btn btn-small btn-danger" onclick="app.deleteCustomReward(${index})">Delete</button>
      </div>
    `;

    return el;
  }

  /**
   * Delete custom reward
   */
  async deleteCustomReward(index) {
    if (!confirm('Are you sure you want to delete this reward?')) return;

    this.customRewards.splice(index, 1);

    // Save to cloud
    this.showSyncStatus('🔄 Saving to cloud...');
    
    try {
      await this.saveDataToCloud();
      this.renderCustomRewards();
      this.renderDefaultMilestones();
      this.showSuccess('Custom reward deleted.');
      this.showSyncStatus('☁️ Synced');
    } catch (error) {
      console.error('Failed to delete reward:', error);
      this.showError('Failed to delete reward from cloud. Please try again.');
      this.showSyncStatus('❌ Sync failed');
    }
  }

  /**
   * Render achievement history
   */
  renderAchievementHistory() {
    const container = document.getElementById('achievementHistory');
    if (!container) return;

    container.innerHTML = '';

    if (this.achievements.length === 0) {
      container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No achievements yet. Keep working towards your goals!</p>';
      return;
    }

    // Sort achievements by date (newest first)
    const sortedAchievements = [...this.achievements].sort(
      (a, b) => new Date(b.claimedDate) - new Date(a.claimedDate)
    );

    sortedAchievements.forEach((achievement) => {
      const achievementEl = this.createAchievementElement(achievement);
      container.appendChild(achievementEl);
    });
  }

  /**
   * Create achievement element
   */
  createAchievementElement(achievement) {
    const el = document.createElement('div');
    el.className = 'achievement-item';

    const claimedDate = new Date(achievement.claimedDate).toLocaleDateString();
    const rewardText = achievement.customReward ? ` - Reward: ${achievement.customReward.description}` : '';

    el.innerHTML = `
      <div class="achievement-header">
        <div class="achievement-title">${achievement.title}</div>
        <div class="achievement-date">${claimedDate}</div>
      </div>
      <div class="achievement-description">
        ${achievement.description}${rewardText}
      </div>
    `;

    return el;
  }

  /**
   * Check for new achievements after daily log
   */
  checkAchievements() {
    const newAchievements = [];

    // Check streak milestones
    this.defaultMilestones
      .filter((m) => m.type === 'streak')
      .forEach((milestone) => {
        if (this.isMilestoneAchieved(milestone) && !this.isMilestoneClaimedInAchievements(milestone)) {
          newAchievements.push(milestone);
        }
      });

    // Check weight milestones
    this.defaultMilestones
      .filter((m) => m.type === 'weight')
      .forEach((milestone) => {
        if (this.isMilestoneAchieved(milestone) && !this.isMilestoneClaimedInAchievements(milestone)) {
          newAchievements.push(milestone);
        }
      });

    // Show achievement notifications
    if (newAchievements.length > 0) {
      newAchievements.forEach((achievement) => {
        this.showAchievementNotification(achievement);
      });
    }
  }

  /**
   * Show achievement notification
   */
  showAchievementNotification(milestone) {
    const customReward = this.getCustomRewardForMilestone(milestone);
    const rewardText = customReward ? ` Your reward: ${customReward.description}` : '';

    const message = `🎉 Achievement Unlocked: ${milestone.title}!${rewardText} Visit the Rewards tab to claim it.`;
    this.showSuccess(message, 5000);
  }

  /**
   * Basic chart rendering methods
   */
  renderWeightChart() {
    // Simplified chart rendering for this version
    const canvas = document.getElementById('weightChart');
    if (!canvas) return;

    const container = canvas.parentElement;
    const isMobile = window.innerWidth <= 768;
    const pixelRatio = isMobile ? 1 : window.devicePixelRatio || 1;
    const containerWidth = container.offsetWidth || (isMobile ? 350 : 800);
    const containerHeight = container.offsetHeight || (isMobile ? 250 : 400);

    canvas.width = containerWidth * pixelRatio;
    canvas.height = containerHeight * pixelRatio;
    canvas.style.width = containerWidth + 'px';
    canvas.style.height = containerHeight + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(pixelRatio, pixelRatio);

    const width = containerWidth;
    const height = containerHeight;

    // Get weight data
    const weightData = this.getWeightData();
    if (weightData.length === 0) {
      this.drawNoDataMessage(ctx, width, height, 'No weight data available');
      return;
    }

    // Simple chart rendering (basic version for JSONBin implementation)
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Weight Chart - Basic Version', width / 2, height / 2);
    ctx.fillText(`${weightData.length} weight entries logged`, width / 2, height / 2 + 30);
  }

  renderActivityChart() {
    // Simplified activity chart
    const canvas = document.getElementById('activityChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Activity Chart - Basic Version', canvas.width / 2, canvas.height / 2);
  }

  renderStreakCalendar() {
    // Simplified calendar
    const container = document.getElementById('streakCalendar');
    if (!container) return;

    container.innerHTML = '<p style="text-align: center; padding: 2rem;">Calendar View - Basic Version</p>';
  }

  /**
   * Get filtered weight data based on chart period
   */
  getWeightData() {
    const weightEntries = Object.values(this.dailyLogs)
      .filter((log) => log.weight !== null)
      .map((log) => ({ date: log.date, weight: log.weight }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (this.chartPeriod === 'all') {
      return weightEntries;
    }

    const cutoffDate = this.getDateOffset(this.currentDate, -this.chartPeriod);
    return weightEntries.filter((entry) => entry.date >= cutoffDate);
  }

  /**
   * Draw "no data" message on canvas
   */
  drawNoDataMessage(ctx, width, height, message) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(message, width / 2, height / 2);
  }

  /**
   * Set chart period and update charts
   */
  setChartPeriod(period) {
    this.chartPeriod = period;

    // Update chart button states
    document.querySelectorAll('.chart-btn').forEach((btn) => {
      if ((btn.dataset.period && parseInt(btn.dataset.period) === period) || (btn.dataset.period === 'all' && period === 'all')) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Re-render charts
    this.renderWeightChart();
    this.renderActivityChart();
  }

  /**
   * Calendar navigation placeholder
   */
  navigateCalendar(direction) {
    // Simplified calendar navigation
    console.log('Calendar navigation:', direction);
  }

  /**
   * Toggle theme between light and dark
   */
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('byf_theme', newTheme);

    this.updateThemeToggle(newTheme);
  }

  /**
   * Update theme toggle button text
   */
  updateThemeToggle(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
  }

  /**
   * Update current date display
   */
  updateCurrentDate() {
    const currentDateEl = document.getElementById('currentDate');
    if (currentDateEl) {
      const today = new Date();
      currentDateEl.textContent = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  }

  /**
   * Show setup screen
   */
  showSetupScreen() {
    document.getElementById('setupScreen').classList.remove('hidden');
    document.getElementById('appScreen').classList.add('hidden');
    
    // Hide settings button
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
      settingsBtn.style.display = 'none';
    }
  }

  /**
   * Show main app screen
   */
  showAppScreen() {
    document.getElementById('setupScreen').classList.add('hidden');
    document.getElementById('appScreen').classList.remove('hidden');

    // Initialize default milestones when showing app
    this.initializeDefaultMilestones();
    
    // Show settings button
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
      settingsBtn.style.display = 'inline-block';
    }
  }

  /**
   * Show success message
   */
  showSuccess(message, duration = 3000) {
    // Remove existing success messages
    const existingMessages = document.querySelectorAll('.success-message');
    existingMessages.forEach((msg) => msg.remove());

    // Create new success message
    const successEl = document.createElement('div');
    successEl.className = 'success-message';
    successEl.textContent = message;

    document.body.appendChild(successEl);

    // Show message
    setTimeout(() => {
      successEl.classList.add('show');
    }, 100);

    // Hide and remove message
    setTimeout(() => {
      successEl.classList.remove('show');
      setTimeout(() => {
        if (successEl.parentNode) {
          successEl.parentNode.removeChild(successEl);
        }
      }, 300);
    }, duration);
  }

  /**
   * Show error message
   */
  showError(message) {
    alert(`Error: ${message}`);
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create global app instance
  window.app = new BribeYourselfFit();

  // Add helpful global functions for development
  window.exportData = () => app.exportData();
  window.resetData = () => app.resetAllData();

  console.log('🌐 BribeYourselfFit JSONBin Cloud Version initialized!');
  console.log('Development commands available:');
  console.log('- exportData() - Export your data');
  console.log('- resetData() - Reset all data (careful!)');
}); Initialize the application
   */
  async init() {
    await this.loadJsonBinConfig();
    this.setupEventListeners();
    this.updateCurrentDate();

    // Check if JSONBin is configured
    if (!this.jsonbinConfig.apiKey || !this.jsonbinConfig.binId) {
      this.showSetupScreen();
    } else {
      // Load data from JSONBin and show app
      try {
        await this.loadDataFromCloud();
        this.showAppScreen();
        this.updateDashboard();
      } catch (error) {
        console.error('Failed to load data from cloud:', error);
        this.
