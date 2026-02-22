# Habit Tracker 2026

A minimal, beautiful habit tracking web application that helps you build and maintain daily habits. Track multiple habits with color-coded visualizations on an interactive calendar, and reflect on your daily progress with notes.

## Features

### Habit Management
- **Create Multiple Habits**: Add as many habits as you want (e.g., "Meditate for 2 minutes", "Read for 30 minutes")
- **Color-Coded Habits**: Each habit is automatically assigned a unique color for easy visual identification
- **Delete Habits**: Remove habits you no longer want to track
- **Habit Selection**: Choose which habit to track from a dropdown menu with color indicators

### Habit Tracking
- **Visual Calendar**: See your entire year at a glance with a linear horizontal layout
- **Mark Dates**: Click individual days or drag to select multiple dates at once
- **Edit Tracker Mode**: Toggle on "Edit Tracker" to mark/unmark dates for your selected habit
- **Color-Coded Progress**: Each habit's marked dates appear in its unique color
- **WCAG AAA Compliant**: All habit colors meet accessibility standards for white text

### Daily Reflection
- **Day Notes**: Click any day to open a modal and write notes about what you did and learned
- **Persistent Storage**: All your habits, marked dates, and notes are saved locally in your browser

### User Experience
- **Custom Modals**: Beautiful, consistent modals for all notifications and confirmations
- **Drag-to-Select**: Click and drag across multiple days to mark them quickly
- **Clear All**: Clear all marked dates for a selected habit with confirmation
- **Minimal Design**: Clean, modern interface with Work Sans typography

## How It Works

### Getting Started
1. **Create a Habit**: Click the "+ New" button next to the habit dropdown
2. **Select a Habit**: Choose a habit from the dropdown to start tracking
3. **Enable Edit Tracker**: Toggle the "Edit Tracker" switch to enable marking dates
4. **Mark Dates**: Click individual days or click and drag to select multiple days
5. **Add Notes**: Click any day cell to add notes about what you did and learned

### Year View
- Displays all 12 months in horizontal columns
- Each month shows every day in a vertical list
- Day numbers appear on the left, abbreviated day names (SU, M, T, etc.) on the right
- Marked dates appear in the color of the selected habit
- Click any day to add notes or view/edit existing notes

### Habit Colors
Habits are automatically assigned colors in this order:
1. Green (default)
2. Dark Teal/Blue
3. Orange
4. Purple
5. Red
6. Brown
7. Pink/Magenta
8. Dark Blue
9. Peach

All colors meet WCAG AAA contrast requirements (7:1 ratio) for accessibility with white text.

## Usage

### Desktop app (recommended — data saved automatically)

Run the app as a native desktop window. Your habits, events, journal entries, and marked dates are saved automatically to your machine and persist between launches.

```bash
# Install dependencies once
npm install

# Run the app
npm start
```

To build a standalone app (e.g. for macOS):

```bash
npm run build
# Output in the dist/ folder — e.g. dist/Minimal Calendar.app on macOS
```

### Browser

You can also open `calendar.html` in any modern web browser. Data is stored in the browser’s localStorage (see [Data storage](#data-storage) and [Saving and backing up data](#saving-and-backing-up-data)).

```bash
# Open the file directly in your browser
open calendar.html
```

Or serve it with a simple HTTP server (helps avoid localStorage quirks with `file://`):

```bash
# Using Python 3
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Then navigate to http://localhost:8000/calendar.html
```

## Technical Details

- **Pure HTML/CSS/JavaScript** for the calendar UI; **Electron** for the desktop app
- **Local Storage**: All data is stored locally (browser localStorage or Electron’s persisted storage)
- **Single HTML file**: The app logic lives in `calendar.html`; the desktop app loads it in a window
- **Browser compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- **Accessibility**: WCAG AAA compliant color contrast for all habit colors

## Data Storage

All your data is stored locally:
- **Desktop app**: Saved automatically to your computer (Electron user data folder). No extra steps.
- **Browser**: Stored in the browser’s localStorage (habits, events, calendars, journal notes, marked dates, settings). Data persists across sessions but is tied to the browser and device.

### Saving and backing up data

- **Export**: Use the **⋮** (three dots) menu next to the year title → **Export data…** to download a JSON backup of all habits, events, calendars, journal entries, and marked dates. Save this file anywhere (e.g. Desktop, cloud).
- **Import**: Same menu → **Import data…** to choose a previously exported JSON file. It will replace current data and reload the app.

## Keyboard Shortcuts

- **Arrow Keys**: Navigate between days when viewing individual day notes (when not in year view)

## Future Enhancements

Potential features for future versions:
- User authentication and cloud sync
- Habit statistics and streaks
- Multiple years support
- Custom habit colors

## Credits

Inspired by [neatocal](https://abetusk.github.io/neatocal/) by abetusk.

## License

Free to use and modify as you wish.
