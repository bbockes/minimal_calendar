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

Simply open `calendar.html` in any modern web browser. No installation or dependencies required.

```bash
# Open the file directly in your browser
open calendar.html
```

Or serve it with a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Then navigate to http://localhost:8000/calendar.html
```

## Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks or libraries required
- **Local Storage**: All data is stored locally in your browser using localStorage
- **Single File**: Everything in one HTML file for easy deployment
- **Browser Compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- **Accessibility**: WCAG AAA compliant color contrast for all habit colors

## Data Storage

All your data is stored locally in your browser:
- **Habits**: Stored with unique IDs, names, and assigned colors
- **Marked Dates**: Each date is stored per habit (e.g., `habit-{habitId}-2026-2-15`)
- **Day Notes**: Stored per date (e.g., `2026-2-15`)
- **Settings**: Edit Tracker toggle state is saved

Your data persists across browser sessions but is specific to the browser and device you're using.

## Keyboard Shortcuts

- **Arrow Keys**: Navigate between days when viewing individual day notes (when not in year view)

## Future Enhancements

Potential features for future versions:
- User authentication and cloud sync
- Export/import data
- Habit statistics and streaks
- Multiple years support
- Custom habit colors

## Credits

Inspired by [neatocal](https://abetusk.github.io/neatocal/) by abetusk.

## License

Free to use and modify as you wish.
