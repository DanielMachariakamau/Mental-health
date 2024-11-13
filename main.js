console.log('Hello World!');
} // JavaScript to toggle a pulsing animation effect
const logo = document.getElementById('logo');

// Toggles the 'animated' class on click to activate or deactivate animation
logo.addEventListener('click', () => {
  logo.classList.toggle('animated');
});
// Translations
const translations = {
  en: {
    title: "Welcome!",
    description: "This is a simple multilingual website example."
  },
  es: {
    title: "¡Bienvenido!",
    description: "Este es un ejemplo de sitio web multilingüe simple."
  },
  fr: {
    title: "Bienvenue!",
    description: "Ceci est un exemple simple de site Web multilingue."
  }
};

// Function to switch languages
function setLanguage(language) {
  document.getElementById('title').innerText = translations[language].title;
  document.getElementById('description').innerText = translations[language].description;
}