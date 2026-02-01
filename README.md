# Interactive Calendar 2026

A minimal, interactive calendar web application inspired by [neatocal](https://abetusk.github.io/neatocal/) that allows you to zoom through different time scales: year → month → week → day.

## Features

- **Year View**: See the entire year at a glance in a linear horizontal layout
- **Month View**: Click any month to see a traditional calendar grid
- **Week View**: Click any day to zoom into its week
- **Day View**: Click any day in the week to see a single-day view
- **Navigation**: Use Previous/Next buttons to move between time periods
- **Breadcrumb Navigation**: Click any level in the breadcrumb trail to jump back

## Design

The calendar maintains a minimal aesthetic with:
- Monospace typography (Courier New)
- Clean borders and subtle backgrounds
- Linear horizontal year layout matching the original neatocal design
- Alternating row colors for readability
- No unnecessary decorations or clutter

## How It Works

### Year View
- Displays all 12 months in horizontal columns
- Each month shows every day in a vertical list
- Day numbers appear on the left, abbreviated day names (SU, M, T, etc.) on the right
- Click any month column to zoom into that month

### Month View
- Shows a traditional calendar grid for the selected month
- Displays day-of-week labels (Sun, Mon, Tue, etc.)
- Click any day to see its week

### Week View
- Shows 7 days in a row with larger boxes
- Click any day to zoom into the single-day view

### Day View
- Displays a large view of a single day
- Shows the day number and full date information

### Navigation
- **Breadcrumbs**: Click any level (2026 > January > Week 2) to jump back to that view
- **Previous/Next Buttons**: Navigate between months, weeks, or days depending on current view
- Buttons are disabled at the boundaries (can't go before January 1 or after December 31)

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
- **Responsive**: Adapts to different screen sizes
- **Lightweight**: Single HTML file, under 15KB
- **Browser Compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)

## Customization

You can easily customize the calendar by modifying:

- **Year**: Change the year in the JavaScript (currently hardcoded to 2026)
- **Colors**: Modify the CSS color values for backgrounds and borders
- **Fonts**: Change the font-family in the body CSS rule
- **Layout**: Adjust grid sizes and padding values

## Credits

Inspired by [neatocal](https://abetusk.github.io/neatocal/) by abetusk.

## License

Free to use and modify as you wish.
