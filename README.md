# Global Time Calculator

A real-time web application for calculating and displaying time across different time zones with an enhanced UI/UX design.

## Features

- Real-time clock display for multiple time zones
- Custom time input with automatic conversion
- Responsive design
- Animated UI elements
- Custom scrollbar and overflow effects

## Time Zones Supported

- Pakistan (PKT)
- United Kingdom (GMT/BST)
- United Arab Emirates (GST)
- United States (EST)
- Germany (CET)
- Japan (JST)

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.0
- Google Fonts (Poppins)

## Installation

1. Clone repository:
```bash
git clone https://github.com/yourusername/global-time-calculator.git
```

2. Open `index.html` in browser

## Usage

1. Current Times:
   - View real-time updates for all supported time zones
   - Automatic updates every second

2. Custom Time Input:
   - Select time in any zone
   - Automatic calculation for all other zones

## Customization

### Colors
```css
:root {
    --gradient-1: linear-gradient(135deg, #FF6B6B, #4ECDC4);
    --gradient-2: linear-gradient(135deg, #A8E6CF, #3498DB);
    --gradient-3: linear-gradient(135deg, #FFD93D, #FF6B6B);
}
```

### Time Zones
```javascript
const timeZones = {
    pak: 'Asia/Karachi',
    uk: 'Europe/London',
    // Add more zones
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## License

MIT License

## Author

Abdul Moeez