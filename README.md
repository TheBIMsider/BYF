# BribeYourselfFit - JSONBin Cloud Version

🌐 **Cloud-synced fitness tracking with JSONBin.io storage**

This version uses [JSONBin.io](https://jsonbin.io) for cloud storage, allowing your fitness data to sync across devices and be accessible anywhere.

## 🚀 Quick Setup

### 1. Get Your JSONBin.io API Key
1. Visit [jsonbin.io](https://jsonbin.io) and create a free account
2. Go to **API Keys** section in your dashboard
3. Create a new API key with these permissions:
   - ✅ **Create** (to create your data storage)
   - ✅ **Read** (to load your data)
   - ✅ **Update** (to save changes)
   - ❌ **Delete** (not needed for normal use)
4. Copy your API key (starts with `$2a$10$...`)

### 2. Deploy Your App
**Option A: GitHub Pages (Recommended)**
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Visit your deployed app URL
4. Enter your JSONBin API key during setup

**Option B: Local Development**
1. Clone/download this repository
2. Open `index.html` in a web browser
3. Enter your JSONBin API key during setup

### 3. Setup Your Profile
1. Enter your JSONBin API key and storage name
2. Set your weight goals and daily targets
3. Start logging your fitness journey!

## 📊 Features

### ✨ **Cloud Benefits**
- 🔄 **Auto-sync** across all your devices
- 💾 **Secure cloud storage** with JSONBin.io
- 🌍 **Access anywhere** with internet connection
- 📱 **Mobile-friendly** PWA that works like a native app

### 🎯 **Core Features**
- **Daily Logging**: Weight, steps, exercise, water intake
- **Wellness Scoring**: 5-point daily wellness checklist
- **Streak Tracking**: Individual and overall consecutive day streaks
- **Progress Charts**: Weight trends and activity summaries
- **Gamification**: Achievements, milestones, and custom rewards
- **Data Export**: Download your data as JSON backup

## 🔒 Security & Privacy

### Your Data is Safe
- ✅ **API keys stored locally** in your browser only
- ✅ **No personal data shared** with BribeYourselfFit
- ✅ **You own your data** - stored in your JSONBin account
- ✅ **HTTPS encryption** for all data transmission
- ✅ **No tracking or analytics** - completely private

### JSONBin.io Free Tier
- 📦 **10,000 API requests/month** (plenty for personal use)
- 🔄 **Unlimited bins** (data storage containers)
- 💰 **Completely free** for individual fitness tracking
- 📈 **Upgrade available** if you need more requests

## 🛠️ Technical Details

### Browser Compatibility
- ✅ Chrome, Firefox, Safari, Edge (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ PWA installable on mobile devices

### Data Structure
Your fitness data is stored as a single JSON object in JSONBin.io:
```json
{
  "meta": {
    "version": "1.0",
    "name": "Your Storage Name"
  },
  "user": { "weight goals, daily targets..." },
  "dailyLogs": { "date-based fitness entries..." },
  "streaks": { "consecutive day counters..." },
  "customRewards": [ "your milestone rewards..." ],
  "achievements": [ "unlocked achievements..." ]
}
```

### API Usage Estimation
Typical usage per month:
- **Daily logging**: ~30 requests
- **Loading app**: ~30 requests  
- **Rewards/settings**: ~10 requests
- **Total**: ~70 requests/month (well under 10K limit)

## 🔧 Configuration

### Environment Variables (Optional)
If deploying on platforms that support environment variables:
```
JSONBIN_API_KEY=your_api_key_here
```

### Customization
- Modify daily goals and milestones in setup
- Customize wellness checklist items (requires code changes)
- Adjust validation ranges in `script.js`

## 🚨 Troubleshooting

### Common Issues

**"Failed to connect to JSONBin.io"**
- ✅ Check your API key is correct
- ✅ Ensure API key has Create, Read, Update permissions
- ✅ Verify internet connection
- ✅ Try refreshing the page

**"Sync failed" errors**
- ✅ Check internet connection
- ✅ Verify you haven't exceeded JSONBin.io free tier limits
- ✅ Try exporting data as backup before troubleshooting

**Data not loading**
- ✅ Clear browser cache and cookies
- ✅ Check if you're using the correct API key
- ✅ Verify your JSONBin.io account is active

### Reset & Recovery
- Use **Settings > Change API Key** to switch accounts
- Use **Settings > Export Data** to backup before making changes
- Use **Settings > Reset All Data** to start fresh (⚠️ permanent!)

## 📱 Mobile Installation

### iOS (iPhone/iPad)
1. Open app in Safari
2. Tap the **Share** button
3. Select **"Add to Home Screen"**
4. Tap **"Add"** to install

### Android
1. Open app in Chrome
2. Tap the **menu** (three dots)
3. Select **"Add to Home screen"**
4. Tap **"Add"** to install

## 🔄 Data Migration

### From localStorage Version
1. Export data from localStorage version
2. Setup JSONBin version with API key
3. Use browser's developer tools to import data
4. Contact support if you need help with migration

### To Other Versions
- Data export works with all BribeYourselfFit versions
- JSON format is compatible across all storage backends

## 🆘 Support

### Documentation
- [JSONBin.io API Docs](https://jsonbin.io/docs)
- [GitHub Issues](https://github.com/yourusername/BribeYourselfFit/issues)

### Getting Help
1. Check this README for common solutions
2. Export your data as backup before troubleshooting
3. Create GitHub issue with:
   - Browser and version
   - Error messages (remove API keys!)
   - Steps to reproduce the problem

## 🔮 Roadmap

### Planned Features
- 📊 **Advanced charts** with full Canvas implementation
- 📱 **Offline mode** with sync when online
- 🔔 **Push notifications** for daily logging reminders
- 📈 **Analytics dashboard** with detailed insights
- 🤝 **Family sharing** options
- 📋 **Custom wellness checklists**

### Other Backend Versions
- 🟢 **localStorage** (offline-only, no setup required)
- 🟡 **Airtable** (structured data with beautiful interface)
- 🔵 **Firebase** (enterprise scaling with real-time sync)

## 📄 License

MIT License - Feel free to fork, modify, and customize for your needs!

## 🙏 Acknowledgments

- [JSONBin.io](https://jsonbin.io) for excellent JSON storage service
- Open source community for inspiration and best practices
- Fitness tracking community for feature ideas and feedback

---

## 🚀 Ready to Start?

1. **Fork this repo** to your GitHub account
2. **Enable GitHub Pages** in repository settings  
3. **Get your JSONBin.io API key** (free account)
4. **Open your deployed app** and enter API key
5. **Start your fitness journey!** 🎯

**Questions?** Create an issue on GitHub - we're here to help! 💪
