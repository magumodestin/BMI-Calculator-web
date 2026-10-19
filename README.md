# BMI Calculator

A simple web app that calculates your Body Mass Index (BMI) from your height and weight and tells you which weight category you fall into. Built with plain HTML, CSS and JavaScript.

## Features

- Enter height in centimetres and weight in kilograms
- Shows your BMI to one decimal place
- Colour-coded weight condition: Underweight, Normal weight, Overweight or Obese
- Visual scale with a marker that shows where your BMI falls
- Input validation with clear error messages (height 50-250 cm, weight 10-400 kg)
- Responsive design for desktop and mobile

## How BMI is calculated

```
BMI = weight (kg) / height (m)²
```

| BMI         | Category      |
| ----------- | ------------- |
| Below 18.5  | Underweight   |
| 18.5 - 24.9 | Normal weight |
| 25 - 29.9   | Overweight    |
| 30 and over | Obese         |

> BMI is a general screening tool and does not replace advice from a health professional.

## Tech stack

- HTML5
- CSS3
- JavaScript (vanilla)

## Project structure

```
bmi-calculator/
├── home.html   # Page structure
├── home.css    # Styles
└── home.js     # BMI calculation and validation
```

## Getting started

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/bmi-calculator.git
   ```
2. Open `home.html` in your browser. No installation needed.

## Screenshot

_Add a screenshot of the calculator here._

## Author

Built by **Destin**, Information Systems student.
