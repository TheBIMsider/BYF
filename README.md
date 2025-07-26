# BribeYourselfFit - Gamified Fitness Tracker

> 🎯 **Open-source, self-hosted fitness tracking with streak-based motivation**

A simple, powerful fitness tracking web app that individuals can fork/download and use as their own personal tracker. The core concept is streak-based motivation where users set their own daily milestones and track consecutive days of meeting their goals.

## 🤖 **Built with AI-Assisted Development**

This project was created using modern AI-powered development tools, demonstrating the power of human-AI collaboration in software development:

- ⚡ **Vide Coding Sessions**: Built live using AI pair programming
- 🧠 **Claude (Anthropic)**: Primary AI assistant for architecture, code generation, and documentation
- 👨‍💻 **GitHub Copilot**: Code completion and intelligent suggestions
- 🏗️ **Human Expertise**: AECO/BIM industry knowledge and project direction by [TheBIMsider](https://bio.link/thebimsider)

**Why this matters:** This showcases how AI tools can help domain experts (like AECO professionals) create sophisticated web applications without traditional programming backgrounds, while maintaining high code quality and best practices.

---

## 🌟 **Choose Your Backend**

BribeYourselfFit offers multiple storage options to fit your needs:

| Version | Storage | Setup | Best For | Branch | Status |
|---------|---------|-------|----------|--------|--------|
| 🏠 **localStorage** | Browser only | None | Simple setup, offline use | `main` | ✅ Ready |
| 🌐 **JSONBin.io** | Cloud API | API key | Cross-device sync, simple cloud | `jsonbin-version` | ✅ Ready |
| 📊 **Airtable** | Structured DB | API setup | Rich data features, sharing | `airtable-version` | 🚧 Coming Soon |
| 🔥 **Firebase** | Real-time DB | Project setup | Enterprise scale, real-time | `firebase-version` | 🚧 Coming Soon |

## 🚀 **Quick Start**

### **Option 1: Fork & Deploy (Recommended)**
1. **Fork this repository** to your GitHub account
2. **Choose your backend** branch (see table above)
3. **Enable GitHub Pages** in repository settings
4. **Visit your deployed app** and start tracking!

### **Option 2: Download & Run Locally**
1. **Download** your preferred version branch
2. **Open `index.html`** in a web browser
3. **Follow setup instructions** for your chosen backend
4. **Start your fitness journey!**

## 📱 **Features**

### **🎯 Core Tracking**
- **Daily Logging**: Weight (weekly), steps, exercise minutes, water intake
- **Exercise Types**: Multi-select from cardio, strength, yoga, sports, walking, other
- **Food & Wellness Score**: 5-point daily checklist system
  - ✅ Avoided sugary drinks
  - ✅ 5+ servings fruits & vegetables  
  - ✅ Practiced portion control
  - ✅ No eating after 8 PM
  - ✅ 7+ hours of sleep

### **🔥 Gamification**
- **Streak Tracking**: Individual streaks for each goal + overall streak
- **Achievement System**: Default milestones + custom rewards
- **Progress Visualization**: Weight trends, activity charts, streak calendar
- **Milestone Celebrations**: 7, 14, 30, 50, 100+ day streaks
- **Weight Loss Rewards**: Every 10 lbs + bonus at 25 & 50 lb marks

### **📊 Analytics & Progress**
- **Interactive Charts**: Weight trends with goal projection
- **Activity Summaries**: Daily metrics with 7/30/all-time views
- **Streak Calendar**: Monthly heatmap showing completion status
- **Data Export**: Full JSON backup and restore capabilities

### **📱 Mobile Optimized**
- **Progressive Web App**: Install like a native app
- **Responsive Design**: Works perfectly on phone, tablet, desktop
- **Offline Capable**: localStorage version works without internet
- **Touch Optimized**: 44px touch targets, mobile-friendly forms

## 🎨 **User Interface**

### **Clean & Minimal Design**
- 🌓 **Dark/Light mode** toggle with system preference detection
- ♿ **Accessible design** with keyboard navigation and screen reader support
- 🎨 **Modern styling** with smooth animations and micro-interactions
- 📱 **Mobile-first** responsive layout

### **Intuitive Navigation**
- **Dashboard**: Daily logging and streak overview
- **Progress**: Charts and analytics
- **Rewards**: Achievements and milestone management

## 🔧 **Technical Details**

### **Built With**
- **Frontend**: Vanilla HTML, CSS, JavaScript (no frameworks!)
- **Charts**: Custom Canvas-based visualization
- **Storage**: Multiple backend options (see versions above)
- **PWA**: Service Worker + Web App Manifest

### **Performance**
- ✅ **Loads in <3 seconds** on mobile
- ✅ **Handles 2+ years** of daily data efficiently
- ✅ **Mobile performance**: 86/100 Lighthouse score
- ✅ **Accessibility**: 82/100 with keyboard navigation

### **Code Quality**
- 📝 **Well-documented**: Comprehensive comments for beginners
- 🏗️ **Modular architecture**: Clean ES6 class-based structure
- 🧪 **Production-ready**: Error handling and data validation
- 📦 **2,400+ lines** of clean, maintainable code

## 📖 **Backend Setup Guides**

### **🏠 localStorage (Main Branch)**
**✅ No setup required!**
- Data stored in browser only
- Works offline
- Perfect for getting started

### **🌐 JSONBin.io Cloud**
```bash
git checkout jsonbin-version
```
1. Get free API key from [jsonbin.io](https://jsonbin.io)
2. Enter API key during app setup
3. Data syncs across devices automatically

### **📊 Airtable Database**
⚠️ Coming Soon - Structured database with rich features
```bash
# Coming in Phase 4b
git checkout airtable-version
```
1. Create [Airtable](https://www.airtable.com/) base with provided template
2. Get API key and base ID
3. Enjoy structured data with rich features

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

### **Target Users:**
- Individuals who want to own their fitness data
- People learning web development
- Users preferring open-source, self-hosted solutions
- Anyone wanting a simple, customizable fitness tracker

## 🛠️ **Development**

### **Local Development**
```bash
# Clone repository
git clone https://github.com/TheBIMsider/BYF.git
cd BYF

# Choose your branch
git checkout main                    # localStorage version
git checkout jsonbin-version        # JSONBin.io version
git checkout airtable-version       # Airtable version
git checkout firebase-version       # Firebase version

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
```

## 🔒 **Privacy & Security**

### **Data Ownership**
- ✅ **You own your data** - stored in your chosen backend
- ✅ **No tracking** - zero analytics or user monitoring
- ✅ **Open source** - audit the code yourself
- ✅ **Self-hosted** - deploy on your own infrastructure

### **Security by Backend**
- **localStorage**: Data stays in your browser only
- **JSONBin.io**: API keys stored locally, HTTPS encryption
- **Airtable**: OAuth or API key authentication
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
- [x] JSONBin.io cloud storage
- [ ] Airtable structured database
- [ ] Firebase real-time sync

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
- 🏠 **localStorage Version**: [Setup Guide](../../tree/main)
- 🌐 **JSONBin Version**: [Setup Guide](../../tree/jsonbin-version)
- 📊 **Airtable Version**: Coming Soon
- 🔥 **Firebase Version**: Comming Soon
- 🔌 **API Integration**: *(guides coming with each backend)*

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

## ⭐ **Star This Repo**

If BribeYourselfFit helps you on your fitness journey, please star this repository to help others discover it!

---

## 🚀 **Ready to Start Your Fitness Journey?**

1. **⭐ Star this repository** to bookmark it
2. **🍴 Fork it** to your GitHub account  
3. **🌿 Choose your branch** based on storage needs
4. **🚀 Deploy to GitHub Pages** or run locally
5. **💪 Start tracking and building streaks!**

**Questions?** **Problems?** **Success stories?** 

We'd love to hear from you! [Create an issue](https://github.com/TheBIMsider/BYF/issues).

---

*Made with ❤️ for the fitness and open-source communities*
