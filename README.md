# 🌍 CountryPeek

CountryPeek is a React + Vite web application that allows users to search for countries and explore detailed information using the RestCountries API.

This project was built as part of the Kalvium Front-End Web Development program.

---

# 🚀 Part 4 Features

This version introduces:

✅ Global Dark/Light Theme using React Context API  
✅ Region Filtering  
✅ Sorting Controls  
✅ CSS Variable Based Theming  
✅ Derived State for Filtered & Sorted Results  
✅ Persistent Theme Across Pages  
✅ Responsive UI Improvements  

---

# 📁 Project Structure

```bash
src/
│
├── components/
│   ├── CountryCard.jsx
│   ├── FilterBar.jsx
│   ├── Header.jsx
│   └── SearchBar.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   ├── useCountries.js
│   └── useCountry.js
│
├── pages/
│   ├── Home.jsx
│   └── CountryPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css

⚙️ Core Features Explained
🔎 Country Search

Users can search for countries by name.

Example:

india
japan
al

The search query fetches matching countries from the API and displays them in a responsive grid layout.

🌍 Region Filter

Users can filter countries by continent/region.

Available filters:

All
Africa
Americas
Asia
Europe
Oceania

Filtering is implemented using JavaScript .filter().

🎨 Theme System

This project uses:

React Context API
CSS Custom Properties (Variables)

to implement dark/light theme support.

🧠 Why Context API?

Without Context API, theme data would need to be passed manually through multiple components.

This is called:

Prop Drilling

Context API solves this problem by making data globally accessible.

🏗️ ThemeContext Architecture
ThemeContext.jsx

Responsibilities:

Store active theme
Provide toggleTheme function
Share theme globally
