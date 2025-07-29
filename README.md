# BribeYourselfFit - Gamified Fitness Tracker

> 🎯 **Open-source, self-hosted fitness tracking with streak-based motivation**

## 🤔 **Why This App Exists**

Sometimes when you're trying to lose weight or be more active, you need accountability. But accountability means different things to different people. For some, it's just tracking numbers. For others - like me - you need an incentive, a motive, a real reason for doing something.

Back in the 2000s when The Biggest Loser was popular, friends would get together for weight loss competitions. There'd be something on the line - $50, a night out, bragging rights - and the winner would take it all. That external motivation helped people actually track their stats, log their weights, and do the work.

**But here's the thing:** Not everyone is motivated by money or new clothes or the same rewards. Every person's fitness journey is different.

That's why BribeYourselfFit was born - a fitness tracker that lets you set your own rewards, your own "bribes" for hitting your goals. Whether it's a cheat meal after a 7-day streak, new workout gear at 30 days, or a weekend getaway at 100 days - you decide what motivates you.

## 🎮 **How It Works**

BribeYourselfFit combines simple daily tracking with powerful motivation:

### **Daily Tracking Made Simple**
- **Weight**: Log weekly (because daily fluctuations are noise)
- **Steps**: Your daily movement goal
- **Exercise**: Minutes + type (cardio, strength, yoga, etc.)
- **Water**: Hydration tracking
- **Wellness Score**: 5-point daily checklist:
  - ✅ Avoided sugary drinks
  - ✅ 5+ servings fruits & vegetables  
  - ✅ Practiced portion control
  - ✅ No eating after 8 PM
  - ✅ 7+ hours of sleep

### **Streak-Based Motivation**
- **Individual streaks** for each goal (steps, exercise, water, wellness)
- **Overall streak** when you hit ALL daily goals
- **Visual progress** with streak calendars and charts
- **Built-in milestones** at 7, 14, 30, 50, 100+ days

### **Your Custom Rewards**
The magic happens in the rewards system. Set your own "bribes":
- **7-day streak**: Favorite cheat meal
- **14-day streak**: New workout playlist
- **30-day streak**: New athletic shoes
- **50-day streak**: Massage or spa day
- **100-day streak**: Weekend vacation

You know what motivates you. The app just helps you stay accountable to your own system.

## 🚀 **Get Started in 2 Minutes**

### **Option 1: Fork & Deploy (Recommended)**
1. **Fork this repository** to your GitHub account
2. **Choose your storage** (see backend options below)
3. **Enable GitHub Pages** in repository settings
4. **Open your app** and start your first streak!

### **Option 2: Download & Run Locally**
1. **Download** your preferred version
2. **Open `index.html`** in any web browser
3. **Set your goals** and rewards
4. **Log your first day!**

### **First Day Setup**
1. **Set your profile**: Starting weight, goal weight, daily targets
2. **Choose your rewards**: What will you "bribe" yourself with?
3. **Log today**: Hit those daily goals and start your streak
4. **Check back tomorrow**: The streak magic begins with day 2

## 🌟 **Choose Your Backend**

BribeYourselfFit offers multiple storage options to fit your needs:

| Version | Storage | Setup | Best For | Branch | Status |
|---------|---------|-------|----------|--------|--------|
| 🏠 **localStorage** | Browser only | None | Simple setup, offline use | `main` | ✅ v1.1 Ready |
| 🌐 **JSONBin.io** | Cloud API | API key | Cross-device sync, simple cloud | `jsonbin-version` | ✅ v1.1 Ready |
| 📊 **Airtable** | Structured DB | API setup | Rich data features, sharing | `airtable-version` | ✅ v1.1 Ready |
| 🔥 **Firebase** | Real-time DB | Project setup | Enterprise scale, real-time | `firebase-version` | 🚧 Coming Soon |

## 🤖 **Built with AI-Assisted Development**

This project was created using modern AI-powered development tools, demonstrating the power of human-AI collaboration in software development:

- ⚡ **Live Coding Sessions**: Built live using AI pair programming and systematic debugging
- 🧠 **Claude (Anthropic)**: Primary AI assistant for architecture, code generation, documentation, and problem-solving
- 👨‍💻 **GitHub Copilot**: Code completion and intelligent suggestions
- 🏗️ **Human Expertise**: AECO/BIM industry knowledge and project direction by [TheBIMsider](https://bio.link/thebimsider)

**Why this matters:** This showcases how AI tools can help domain experts (like AECO professionals) create sophisticated web applications without traditional programming backgrounds, while maintaining high code quality and best practices through systematic debugging and iterative development.

---

## 📱 **Features**

### **🎯 Core Tracking**
- **Daily Logging**: Weight (weekly), steps, exercise minutes, water intake
- **Exercise Types**: Multi-select from cardio, strength, yoga, sports, walking, cycling, swimming, other
- **Food & Wellness Score**: 5-point daily checklist system
  - ✅ Avoided sugary drinks
  - ✅ 5+ servings fruits & vegetables  
  - ✅ Practiced portion control
  - ✅ No eating after 8 PM
  - ✅ 7+ hours of sleep

### **🔥 Gamification**
- **Streak Tracking**: Individual streaks for each goal + overall streak
- **Achievement System**: Default milestones + **claimable custom rewards**
- **Progress Visualization**: Weight trends, activity charts, streak calendar
- **Milestone Celebrations**: 7, 14, 30, 50, 100+ day streaks
- **Weight Loss Rewards**: Every 10 lbs + bonus at 25 & 50 lb marks

### **📊 Analytics & Progress**
- **Interactive Charts**: Weight trends with goal projection and **unit conversion**
- **Activity Summaries**: Daily metrics with 7/30/all-time views
- **Streak Calendar**: Monthly heatmap showing completion status
- **Data Export**: Full JSON backup and restore capabilities

### **📱 Mobile Optimized**
- **Progressive Web App**: Install like a native app
- **Responsive Design**: Works perfectly on phone, tablet, desktop
- **Offline Capable**: localStorage version works without internet
- **Touch Optimized**: 44px touch targets, mobile-friendly forms

### **⚙️ Advanced Settings** *(v1.1 Features)*
- **App Preferences**: Theme selection, **units (Imperial/Metric) with real-time conversion**, date formats
- **Goal Management**: Modify daily targets and weight goals without losing streak history
- **Data Management**: Complete backup/restore system with import/export
- **Wellness Customization**: View wellness checklist details and customize goal thresholds
- **Streak Management**: Reset options with granular control (streaks only, logs only, etc.)

## 🎨 **User Interface**

### **Clean & Minimal Design**
- 🌓 **Dark/Light mode** toggle with system preference detection
- ♿ **Accessible design** with keyboard navigation and screen reader support
- 🎨 **Modern styling** with smooth animations and micro-interactions
- 📱 **Mobile-first** responsive layout

### **Intuitive Navigation**
- **Dashboard**: Daily logging and streak overview
- **Progress**: Charts and analytics with **weight unit conversion**
- **Rewards**: Achievements and milestone management with **custom reward claiming**
- **Settings**: Comprehensive preferences and data management *(v1.1)*

## 🔧 **Technical Details**

### **Built With**
- **Frontend**: Vanilla HTML, CSS, JavaScript (no frameworks!)
- **Charts**: Custom Canvas-based visualization with unit conversion
- **Storage**: Multiple backend options (see versions above)
- **PWA**: Service Worker + Web App Manifest

### **Performance**
- ✅ **Loads in <3 seconds** on mobile
- ✅ **Handles 2+ years** of daily data efficiently
- ✅ **Mobile performance**: 86/100 Lighthouse score
- ✅ **Accessibility**: Enhanced keyboard navigation and focus indicators

### **Code Quality**
- 📝 **Well-documented**: Comprehensive comments for beginners
- 🏗️ **Modular architecture**: Clean ES6 class-based structure
- 🧪 **Production-ready**: Error handling and data validation
- 📦 **2,400+ lines** of clean, maintainable code

## 📖 **Backend Setup Guides**

### **🏠 localStorage v1.1 (Main Branch)**
**✅ No setup required!**
- Data stored in browser only
- Works offline
- Perfect for getting started
- **New in v1.1**: Advanced settings, goal management, data import/export

### **🌐 JSONBin.io Cloud v1.1**
```bash
git checkout jsonbin-version
```
1. Get free API key from [jsonbin.io](https://jsonbin.io)
2. Enter API key during app setup
3. Data syncs across devices automatically

### **📊 Airtable Database v1.1** 
```bash
git checkout airtable-version
```
1. Create [Airtable](https://www.airtable.com/) base with provided template
2. Get Personal Access Token and base ID
3. Enjoy structured database with:
   - **5 fully functional tables** (Users, Daily Logs, Settings, Custom Rewards, Achievements)
   - **Weight unit conversion** (lbs ↔ kg) with real-time UI updates
   - **Custom reward claiming** with milestone integration
   - **Real-time database sync** across all tables
   - **Enterprise-level field validation** and error handling

### **🔥 Firebase Real-time**
⚠️ Coming Soon - Enterprise scaling with real-time sync
```bash
# Coming in Phase 4c
git checkout firebase-version
```
1. Create [Firebase](https://firebase.google.com/) project
2. Enable Realtime Database
3. Configure authentication rules

## 🎯 **Use Cases**

### **Perfect For:**
- 👤 **Personal fitness tracking** with complete data ownership
- 🎓 **Learning web development** with real-world project
- 🏠 **Self-hosted solutions** without dependency on fitness apps
- 🔧 **Customization** - modify goals, rewards, and features
- 👨‍💻 **Developers** wanting to understand PWA and data storage patterns
- 📊 **Database enthusiasts** who want structured fitness data (Airtable version)

### **Target Users:**
- Individuals who want to own their fitness data
- People learning web development
- Users preferring open-source, self-hosted solutions
- Anyone wanting a simple, customizable fitness tracker
- Teams/families wanting to share fitness data (Airtable version)

## 🛠️ **Development**

### **Local Development**
```bash
# Clone repository
git clone https://github.com/TheBIMsider/BYF.git
cd BYF

# Choose your branch
git checkout main                    # localStorage v1.1
git checkout jsonbin-version        # JSONBin.io v1.1
git checkout airtable-version       # Airtable v1.1
git checkout firebase-version       # Firebase version (Coming Soon)

# Open in browser
open index.html
```

### **Project Structure**
```
BYF/
├── index.html          # Main app structure
├── styles.css          # Complete styling with themes
├── script.js           # Core application logic
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker for PWA
├── README.md          # This file
```

### **Contributing**
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📊 **Data Structure**

### **Core Data Types**
```javascript
// User Profile
{
  startingWeight: 180,
  goalWeight: 160,
  dailySteps: 8000,
  dailyExercise: 30,
  dailyWater: 2
}

// Daily Log Entry
{
  date: "2025-07-25",
  weight: 175,
  steps: 8500,
  exerciseMinutes: 45,
  exerciseTypes: ["cardio", "strength"],
  water: 2.5,
  wellnessScore: 4,
  wellnessItems: ["sugary-drinks", "fruits-vegetables", "portion-control", "sleep"]
}

// Streak Tracking
{
  overall: 15,        // All goals met
  steps: 20,          // Individual streaks
  exercise: 18,
  water: 22,
  wellness: 16
}

// Settings (v1.1)
{
  themePreference: "system",
  weightUnit: "lbs",      // Real-time conversion support
  dateFormat: "US",
  weekStart: "sunday",
  allowPartialSteps: false,
  allowPartialExercise: false,
  strictWellness: false
}

// Custom Rewards (with claiming integration)
{
  type: "weight",
  description: "New workout shoes",
  weightLoss: 10,
  claimed: false,
  createdDate: "2025-07-29"
}
```

## 🔒 **Privacy & Security**

### **Data Ownership**
- ✅ **You own your data** - stored in your chosen backend
- ✅ **No tracking** - zero analytics or user monitoring
- ✅ **Open source** - audit the code yourself
- ✅ **Self-hosted** - deploy on your own infrastructure

### **Security by Backend**
- **localStorage**: Data stays in your browser only - ultimate privacy
- **JSONBin.io**: API keys stored locally, HTTPS encryption
- **Airtable**: Personal Access Tokens with granular permissions, enterprise-grade security
- **Firebase**: Google's enterprise security infrastructure

## 📱 **Browser Support**

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Full support |
| Firefox | 75+ | ✅ Full support |
| Safari | 13+ | ✅ Full support |
| Edge | 80+ | ✅ Full support |
| iOS Safari | 13+ | ✅ PWA installable |
| Chrome Mobile | 80+ | ✅ PWA installable |

## 🗺️ **Roadmap**

### **Phase 4: Backend Integrations** ✅
- [x] localStorage advanced features (v1.1)
- [x] JSONBin.io cloud storage (v1.1)
- [x] Airtable structured database (v1.1)
- [ ] Firebase real-time sync (Phase 4c - Next)

### **Phase 5: Advanced Features**
- [ ] Custom wellness checklists
- [ ] Social sharing capabilities
- [ ] Advanced analytics dashboard
- [ ] Nutrition tracking integration
- [ ] Workout routine templates

### **Phase 6: Mobile Apps**
- [ ] React Native mobile app
- [ ] Apple Watch companion
- [ ] Android Wear support

## 🆘 **Support**

### **Documentation**
- 📖 **Branch READMEs**: Each version has detailed setup instructions
- 🏠 **localStorage v1.1**: [Setup Guide](../../tree/main) - No setup required!
- 🌐 **JSONBin v1.1**: [Setup Guide](../../tree/jsonbin-version)
- 📊 **Airtable v1.1**: [Setup Guide](../../tree/airtable-version)
- 🔥 **Firebase Version**: "Coming Soon"

### **Community**
- 🐛 **Bug Reports**: [Create GitHub Issue](https://github.com/TheBIMsider/BYF/issues)

### **Getting Help**
1. Check the README for your specific branch
2. Search existing GitHub issues
3. Create new issue with:
   - Branch/version you're using
   - Browser and version
   - Steps to reproduce the problem
   - Screenshots if applicable

## 📄 **License**

BSD-3-Clause License - see [LICENSE](LICENSE) file for details.

**TL;DR**: You can use, modify, and distribute this freely. Just keep the license notice.

## 🙏 **Acknowledgments**

- **Fitness tracking community** for feature inspiration
- **Open source contributors** for best practices
- **Web development community** for modern standards
- **Beta testers** for real-world feedback
- **AI development tools** for enabling rapid iteration and systematic debugging

## ⭐ **Star This Repo**

If BribeYourselfFit helps you on your fitness journey, please star this repository to help others discover it!

---

## 🚀 **Ready to Start Your Fitness Journey?**

1. **⭐ Star this repository** to bookmark it
2. **🍴 Fork it** to your GitHub account  
3. **🌿 Choose your branch** based on storage needs:
   - **Simple start**: `main` (localStorage v1.1)
   - **Cloud sync**: `jsonbin-version` (JSONBin v1.1)
   - **Database power**: `airtable-version` (Airtable v1.1)
   - **Enterprise scale**: `firebase-version` (Coming Soon)
4. **🚀 Deploy to GitHub Pages** or run locally
5. **💪 Start tracking and building streaks!**

## 🎉 **Latest Updates**

### **Airtable v1.1 - 100% Complete** *(July 29, 2025)*
- ✅ **All 5 database tables** working perfectly
- ✅ **Weight unit conversion** with real-time UI updates (lbs ↔ kg)
- ✅ **Custom reward claiming** with full milestone integration
- ✅ **Production-ready** with enterprise-level error handling
- ✅ **Real-time sync** across all Airtable tables

**Questions?** **Problems?** **Success stories?** 

We'd love to hear from you! [Create an issue](https://github.com/TheBIMsider/BYF/issues).

---

*Made with ❤️ & 🤖 assistance for the fitness and open-source communities*
