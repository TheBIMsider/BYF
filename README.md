# BribeYourselfFit - Airtable Database Version v1.1

📊 **Structured database fitness tracking with Airtable's powerful features**

This version uses [Airtable](https://airtable.com) for data storage, providing a structured database with visual interface, rich field types, and powerful data management capabilities.

## 🤖 **Built with AI-Assisted Development**

This Airtable version was developed using advanced AI-powered development tools:

- ⚡ **Live Coding Sessions**: Real-time AI pair programming for database integration
- 🧠 **Claude (Anthropic)**: Database architecture, API integration, and systematic debugging
- 👨‍💻 **GitHub Copilot**: Intelligent code completion and suggestions
- 🏗️ **Human Expertise**: AECO/BIM domain knowledge and project direction by [TheBIMsider](https://bio.link/thebimsider)

This showcases how AI tools enable domain experts to build sophisticated database-driven applications with modern API patterns and structured data relationships.

---
## 📱 Screenshot

## 🚀 Quick Setup

### 1. Copy the Airtable Base Template
1. **[Use this Airtable template](https://airtable.com/appmoO7oRBIkwdegp/shrI1iK3qEtLWCTwQ)** to copy the pre-configured base to your account
2. **Review the sample data**. After reviewing, delete the sample data, but leave the table structure intact
3. **Rename your base** to something like "My BribeYourselfFit Data"
4. **Note your Base ID** from the URL (starts with `app...`)

### 2. Create Your Personal Access Token
1. Visit [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. **Create new token** with these settings:
   - **Name**: "BribeYourselfFit Access"
   - **Scopes**: 
     - ✅ `data.records:read`
     - ✅ `data.records:write`
     - ✅ `schema.bases:read`
   - **Access**: Select your BribeYourselfFit base
3. **Copy your token** (starts with `pat...`)

### 3. Deploy Your App
**Option A: GitHub Pages (Recommended)**
1. Fork this repository
2. Switch to `airtable-version` branch
3. Enable GitHub Pages in repository settings
4. Visit your deployed app URL
5. Enter your Airtable credentials during setup

**Option B: Local Development**
1. Clone/download this repository: `git checkout airtable-version`
2. Open `index.html` in a web browser
3. Enter your Airtable credentials during setup

### 4. Setup Your Profile
1. Test your Airtable connection (app validates credentials automatically)
2. Set your weight goals and daily targets
3. Your data automatically syncs to your structured Airtable base
4. Start logging and explore your data in Airtable's interface!

## 📊 Features

### ✨ **Airtable Database Benefits**
- 🗄️ **Structured data** in organized tables with proper relationships
- 👀 **Visual data interface** - view and edit your data directly in Airtable
- 📈 **Rich field types** - proper date fields, numbers, multi-select options
- 🔍 **Powerful filtering** and sorting in Airtable's interface
- 📊 **Built-in charts** and reporting within Airtable
- 🤝 **Data sharing** capabilities with family/coaches
- 📱 **Airtable mobile app** access to your fitness data
- 🔄 **Real-time sync** across all devices and platforms
- 📝 **Data validation** with proper field constraints
- 🏷️ **Multiple Select fields** for exercise types and wellness items

### 🗂️ **Complete Database Structure**
Your fitness data is organized across **5 fully functional tables**:

**📋 Daily Logs Table**
- Date, Weight, Steps, Exercise Minutes
- Exercise Types (Multiple Select: Cardio, Strength, Yoga, Sports, Walking, Cycling, Swimming, Other)
- Water intake, Wellness Score
- Wellness Items (Multiple Select: Avoided Sugary Drinks, Fruits & Vegetables, Portion Control, No Late Eating, Good Sleep)
- Timestamp for precise tracking

**👤 Users Table**
- User profile with Starting Weight, Current Weight, Goal Weight
- Daily targets: Steps, Exercise Minutes, Water goals
- Setup Date and **Last Weight Update tracking** ✅
- Complete profile synchronization

**⚙️ Settings Table**
- App preferences: Theme, **Weight Unit (lbs/kg)**, Date Format
- Goal thresholds and customization options
- Version tracking and configuration history
- **Real-time settings sync with weight conversion** ✅

**🎁 Custom Rewards Table**
- Your personalized milestone rewards with proper field mapping ✅
- Target Type (overall-streak, weight-loss, steps-streak, etc.)
- Target Value and reward descriptions
- Creation dates and **full reward claiming integration** ✅

**🏆 Achievements Table**
- Unlocked milestones with proper type mapping ✅
- Achievement progress tracking with correct field validation
- Date achieved and reward claim history
- **Complete achievement synchronization including custom rewards** ✅

### 🎯 **Core Features**
- **Daily Logging**: Steps, exercise, water intake with structured validation
- **Weekly Logging**: Weight tracking with proper date fields including Last Weight Update
- **Wellness Scoring**: 5-point daily wellness checklist with Multiple Select fields
- **Streak Tracking**: Individual and overall consecutive day streaks
- **Progress Charts**: Weight trends and activity summaries with **unit conversion support** ✅
- **Gamification**: Achievements, milestones, and **claimable custom rewards** ✅
- **Data Export**: Download from both app and Airtable
- **Duplicate Prevention**: Smart logic prevents data duplication across all tables

### ⚙️ **Advanced Settings** *(v1.1 Features)*
- **App Preferences**: Theme selection, **units (Imperial/Metric) with real-time conversion**, date formats, week start day
- **Goal Management**: Modify daily targets and weight goals with instant database sync
- **Enhanced Data Management**: Complete backup/restore with Airtable integration
- **Wellness Customization**: View wellness checklist details and customize thresholds
- **Database Controls**: Connection management, sync preferences, and comprehensive data validation
- **Granular Reset Options**: Table-specific reset choices with confirmation

### 🔄 **Weight Unit Conversion System** *(NEW in v1.1)*
- **Real-time Conversion**: Switch between lbs and kg with instant UI updates
- **Complete Coverage**: Converts all weight displays including:
  - Quick Stats sidebar (300 lbs → 136.1 kg)
  - Progress charts with proper scaling
  - Form inputs and labels
  - Goal lines and chart axes
- **Database Sync**: Weight unit preference saved to Airtable Settings table
- **Smart Labels**: Clean unit indicators without duplication

### 🏆 **Custom Rewards Integration** *(NEW in v1.1)*
- **Full Milestone System**: Custom rewards appear as claimable milestones
- **Achievement Flow**: Complete claiming experience with celebration modals
- **Progress Tracking**: Custom rewards show "Achieved" status when criteria met
- **History Integration**: Claimed custom rewards appear in achievement history
- **Database Sync**: All custom reward data syncs to Airtable tables

## 🎨 **User Interface**

### **Intuitive Navigation**
- **Dashboard**: Daily logging with real-time Airtable sync and weight conversion
- **Progress**: Charts and analytics with database-powered insights and unit conversion
- **Rewards**: Achievements and milestone management with complete custom reward integration
- **Settings**: Comprehensive preferences, goal management, and database controls

### **Airtable Integration UI**
- **Connection Status**: Real-time indicators for database connectivity
- **Sync Progress**: Visual feedback for data synchronization across all 5 tables
- **Field Validation**: Smart error messages for data format issues
- **Table Health**: Monitor the status of all database tables with live updates

## ⚙️ **Settings & Configuration**

### **☁️ Database Sync Settings**
- **Force Sync**: Trigger immediate Airtable synchronization across all tables
- **Test Connection**: Verify Personal Access Token and base accessibility
- **Update Credentials**: Change to different Airtable account or base
- **Sync Status**: Real-time monitoring of all 5 table sync operations
- **Connection Health**: Automated connectivity checks and recovery

### **🗄️ Database Management**
- **Table Monitoring**: Status indicators for Users, Daily Logs, Settings, Custom Rewards, and Achievements tables
- **Data Validation**: Automatic field format checking and correction with proper error handling
- **Duplicate Prevention**: Smart logic to update existing records instead of creating duplicates
- **Relationship Integrity**: Maintain proper connections between related data across tables

### **⚙️ App Preferences (All Sync to Database)**
- **Theme Control**: Light, Dark, or System preference with database sync
- **Units & Format**: **Weight units (lbs/kg) with real-time conversion**, date formats (US/EU/ISO), week start day
- **Display Options**: Customizable interface preferences stored in Settings table

### **🎯 Goal Management (Full Database Integration)**
- **Daily Goals**: Modify steps, exercise, and water targets with Users table sync
- **Weight Goals**: Update goal weight while preserving streak history
- **Database Validation**: Automatic field constraint checking and helpful error messages
- **Real-time Updates**: Changes sync immediately to Airtable

### **📊 Enhanced Data Management**
- **Export Airtable Data**: Download directly from your database with full structure
- **Export Local Backup**: Download browser storage backup
- **Import Data**: Restore from backup files with full database sync to all tables
- **Database Statistics**: View record counts, sync status, and table health
- **Airtable Interface**: Direct link to view/edit data in Airtable's powerful interface

### **🌱 Wellness Customization**
- **Checklist Details**: View explanations for all 5 wellness items
- **Multiple Select Options**: Properly configured Airtable field options
- **Goal Thresholds**: Customize what counts as "meeting" each goal
- **Flexible Scoring**: Adjust wellness requirements with database storage

### **⚠️ Database Reset Options**
- **🔄 Reset Streaks**: Clear counters in local storage only
- **📋 Clear Specific Tables**: Individual table reset (Daily Logs, Users, etc.)
- **🗑️ Clear Today's Entry**: Remove today's Daily Logs record
- **⚙️ Reset Settings Table**: Clear app preferences in database
- **🏆 Clear Achievements**: Remove achievements and custom rewards tables
- **💥 Complete Database Reset**: Delete all records from all 5 tables
- **🖥️ Local Cache Only**: Clear browser storage while preserving database

### **Sync Status Indicators**
- 🟢 **Connected**: All tables accessible and syncing
- 🔄 **Syncing**: Active database operations in progress
- ✅ **Synced**: All data current across all 5 tables
- 🔴 **Error**: Connection or table access issue with detailed error reporting
- ⚠️ **Partial**: Some tables syncing, others need attention

## 🔒 Security & Privacy

### **Your Data is Safe**
- ✅ **Personal Access Tokens** stored locally in your browser only
- ✅ **Token validation** with proper scope and permission checking
- ✅ **You own your data** - stored in your personal Airtable base
- ✅ **HTTPS encryption** for all database communications
- ✅ **No data sharing** - your base is private by default
- ✅ **Granular permissions** - tokens only access what you specify
- ✅ **Database integrity** with Airtable's enterprise-grade infrastructure

### **Airtable Free Plan**
- 🗄️ **1,200 records per base** (perfect for years of fitness data across all tables)
- 📊 **Unlimited bases** in your workspace
- 👥 **Collaboration features** with family/coaches
- 📱 **Mobile and web access** to your structured data
- 💰 **Completely free** for personal fitness tracking
- 📈 **Upgrade available** for larger datasets and advanced features

## 🛠️ Technical Details

### **Browser Compatibility**
- ✅ Chrome, Firefox, Safari, Edge (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ PWA installable on mobile devices
- ✅ Airtable mobile app compatibility

### **Complete Database Schema**
Your fitness data is stored across 5 specialized Airtable tables with proper field validation:

**Users Table**
```
User ID (Text) | Starting Weight (Number) | Current Weight (Number)
Goal Weight (Number) | Daily Steps (Number) | Daily Exercise (Number)
Daily Water (Number) | Setup Date (Date) | Last Weight Update (Date) ✅
```

**Daily Logs Table**
```
Date (Date) | Weight (Number) | Steps (Number) | Exercise Minutes (Number)
Exercise Types (Multiple Select) | Water (Number) | Wellness Score (Number)
Wellness Items (Multiple Select) | Timestamp (Date)
```

**Settings Table**
```
Setting Name (Text) | Theme Preference (Single Select) | Weight Unit (Single Select) ✅
Date Format (Single Select) | Week Start (Single Select) | Version (Text)
Allow Partial Steps (Checkbox) | Allow Partial Exercise (Checkbox) | Strict Wellness (Checkbox)
Last Updated (Date) ✅
```

**Custom Rewards Table** ✅
```
Title (Text) | Description (Long Text) | Target Type (Single Select)
Target Value (Number) | Claimed (Checkbox) | Created Date (Date)
```

**Achievements Table** ✅
```
Title (Text) | Type (Single Select) | Description (Long Text)
Date Achieved (Date) | Value (Number)
```

### **API Usage & Performance**
- **Smart sync logic** prevents unnecessary API calls across all tables
- **Duplicate detection** reduces database operations with intelligent record matching
- **Batch operations** for efficient data handling
- **Retry logic** with exponential backoff for reliability
- **Connection pooling** for optimal performance
- **Field validation** prevents API errors with proper data formatting

## 🔧 Configuration

### **Environment Variables (Optional)**
If deploying on platforms that support environment variables:
```
AIRTABLE_TOKEN=your_personal_access_token
AIRTABLE_BASE_ID=your_base_id
```

### **Advanced Customization**
- **Database Structure**: Modify tables and fields in Airtable interface
- **Field Options**: Customize Multiple Select options for exercise types and wellness items
- **Views and Filters**: Create custom views in Airtable for data analysis
- **Automation**: Set up Airtable automations for advanced workflows
- **Integrations**: Connect with other apps using Airtable's ecosystem

## 👨‍💻 Development Commands

For developers and advanced users, these console commands are available:

```javascript
// Export data from Airtable (all tables)
exportCloudData()

// Export local backup
exportData()

// Force immediate database sync (all tables)
forceSync()

// Test database connection
testConnection()

// View comprehensive app and database statistics
getStats()

// Reset database (careful! - affects all tables)
resetData()

// Debug form state and data consistency
debugForm()
```

## 🚨 Troubleshooting

### **Common Issues**

**"Airtable Personal Access Token should start with 'pat'"**
- ✅ Ensure token starts with `pat` and is at least 17 characters
- ✅ Copy the complete token without extra spaces
- ✅ Verify token has proper scopes: data.records:read, data.records:write, schema.bases:read

**"Missing required tables: [table names]"**
- ✅ Ensure you've copied the complete base template with all 5 tables
- ✅ Verify all tables exist: Users, Daily Logs, Settings, Custom Rewards, Achievements
- ✅ Check table names match exactly (case-sensitive)

**"Field '[field name]' cannot accept the provided value"**
- ✅ Check Multiple Select field options match app data exactly
- ✅ Verify date fields are configured as Date type with US format
- ✅ Ensure number fields allow decimal values where needed
- ✅ Confirm Single Select fields have all required options

**"INVALID_MULTIPLE_CHOICE_OPTIONS error"**
- ✅ Add missing options to Single Select fields in Target Type columns
- ✅ Required options: overall-streak, weight-loss, steps-streak, exercise-streak, water-streak, wellness-streak, milestone

**Field mapping errors for Custom Rewards or Achievements:**
- ✅ Verify field names match exactly: Title, Description, Target Type, Target Value, Created Date
- ✅ Check Achievement fields: Title, Type, Description, Date Achieved, Value

**Weight unit conversion not working:**
- ✅ Ensure Settings table has Weight Unit field configured as Single Select
- ✅ Refresh the page after changing weight units
- ✅ Check browser console for any JavaScript errors

**Custom rewards not appearing as milestones:**
- ✅ Ensure Custom Rewards table has proper field mapping
- ✅ Refresh the Rewards tab after creating custom rewards
- ✅ Verify reward criteria match your current progress

### **Database Recovery**
- Use **Settings > Database Management** to monitor table health across all 5 tables
- Use **Settings > Export Airtable Data** to backup before making changes
- Use **Force Sync** to resolve temporary connection issues
- Use **Clear Specific Tables** for granular data reset
- Access your data directly in Airtable interface for manual corrections
- All tables maintain data integrity with proper field validation

## 📱 Mobile Installation

### **iOS (iPhone/iPad)**
1. Open app in Safari
2. Tap the **Share** button
3. Select **"Add to Home Screen"**
4. Tap **"Add"** to install
5. Also install **Airtable mobile app** for direct database access to all your tables

### **Android**
1. Open app in Chrome
2. Tap the **menu** (three dots)
3. Select **"Add to Home screen"**
4. Tap **"Add"** to install
5. Also install **Airtable mobile app** for direct database access to all your tables

## 🔄 Data Migration

### **From localStorage/JSONBin Versions**
1. Export data from your current version using Settings > Export
2. Setup Airtable version with Personal Access Token and Base ID
3. Use Settings > Import Data to restore your backup
4. All data will be migrated to appropriate Airtable tables automatically
5. Enjoy the power of structured database storage across all 5 tables!

### **To Other Versions**
- Data export compatible with all BribeYourselfFit versions
- JSON format translates seamlessly between storage backends
- Database structure enhances but doesn't break compatibility

## 🎯 **Unique Airtable Advantages**

### **Why Choose Airtable?**
- 📊 **Visual Data Management**: See your fitness data in beautiful, organized tables
- 🔍 **Advanced Filtering**: Create custom views to analyze your progress across all data types
- 📈 **Built-in Charts**: Generate reports directly in Airtable using your structured data
- 🤝 **Collaboration**: Share your progress with trainers, family, or accountability partners
- 📱 **Mobile Access**: Edit data directly in Airtable's mobile app with full table access
- 🔗 **Integrations**: Connect with other fitness apps and services
- 💾 **Data Ownership**: Your structured database that you control completely
- 🛡️ **Enterprise Security**: Benefit from Airtable's security infrastructure

### **Power User Features**
- **Custom Views**: Filter to see only weekdays, specific months, or goal achievement periods
- **Formulas**: Create calculated fields for advanced metrics across tables
- **Automations**: Set up notifications or data processing rules
- **API Access**: Build additional tools using Airtable's REST API
- **Templates**: Share your base structure with others
- **Backup**: Export your entire database anytime with full relational structure

## 🆘 Support

### **Documentation**
- [Airtable API Documentation](https://airtable.com/developers/web/api/introduction)
- [Personal Access Tokens Guide](https://airtable.com/developers/web/guides/personal-access-tokens)
- [GitHub Issues](https://github.com/TheBIMsider/BYF/issues)

### **Getting Help**
1. Check this README for common solutions
2. Export your data as backup before troubleshooting
3. Create GitHub issue with:
   - Version: Airtable v1.1
   - Browser and version
   - Error messages (remove tokens!)
   - Base structure verification (all 5 tables)
   - Steps to reproduce the problem

## 🔮 Roadmap

### **✅ Completed in v1.1**
- ✅ **Complete Airtable Integration** with all 5 tables syncing perfectly
- ✅ **Advanced Database Controls** with table-specific management
- ✅ **Smart Duplicate Prevention** using database queries across all tables
- ✅ **Enhanced Data Validation** with proper field type checking
- ✅ **Structured Data Export** with database relationship preservation
- ✅ **Custom Rewards Full Integration** with proper field mapping and claiming system
- ✅ **Achievements Complete Sync** with correct type validation
- ✅ **Last Weight Update Tracking** in Users table
- ✅ **Real-time Settings Sync** to Settings table
- ✅ **Weight Unit Conversion System** with complete UI integration (lbs ↔ kg)
- ✅ **Custom Rewards Milestone Integration** with full claiming functionality
- ✅ **Comprehensive Error Handling** with detailed API response logging

### **Planned Features**
- 🔔 **Airtable Automations** for fitness reminders and achievements
- 📊 **Advanced Analytics** using Airtable's interface and charts
- 🤝 **Collaboration Features** with shared bases and permissions
- 📱 **Mobile App Integration** with Airtable's mobile platform
- 🎨 **Custom Dashboard Views** using Airtable's interface designer
- 🔗 **Third-party Integrations** with fitness wearables and apps

### **Other Backend Versions**
- 🟢 **localStorage v1.1** (offline-only, no setup required)
- 🟡 **JSONBin v1.1** (simple cloud sync with JSON storage)
- 🔵 **Firebase** (real-time sync with Google infrastructure) - *Coming Next*

## 📄 **License**

BSD-3-Clause License - see [LICENSE](LICENSE) file for details.

**TL;DR**: You can use, modify, and distribute this freely. Just keep the license notice.

## 🙏 Acknowledgments

- [Airtable](https://airtable.com) for providing an excellent database platform
- Open source community for inspiration and best practices
- Fitness tracking community for feature ideas and feedback
- Beta testers who helped refine the database structure and field mappings
- AI-assisted development tools that enabled rapid iteration and systematic debugging

---

## 🚀 Ready to Start?

1. **[Copy the Airtable base template](https://airtable.com/appmoO7oRBIkwdegp/shrI1iK3qEtLWCTwQ)** to your account
2. **Review the sample data**. After reviewing, delete the sample data, but leave the table structure intact.
3. **Fork this repo** and switch to `airtable-version` branch
4. **Enable GitHub Pages** in repository settings  
5. **Create your Personal Access Token** at airtable.com/create/tokens
6. **Enter your credentials** in the deployed app
7. **Start your fitness journey with complete database power!** 🎯

**Questions?** Create an issue on GitHub - we're here to help! 💪

**Want to see your data?** Check out your Airtable base for a beautiful, structured view of your fitness journey across all 5 tables! 📊

---

## 🎉 **Version 1.1**

This Airtable version is now **production-ready** with:
- ✅ **All 5 tables working perfectly**
- ✅ **Complete weight unit conversion (lbs ↔ kg)**
- ✅ **Full custom rewards integration with claiming**
- ✅ **Real-time database synchronization**
- ✅ **Enterprise-level error handling**

Ready for daily use as your complete fitness tracking solution with the power of structured database storage!

---

*Airtable Database v1.1 - Complete with all 5 tables syncing, weight unit conversion, custom rewards integration, and comprehensive database features*
