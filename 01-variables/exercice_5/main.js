// ecrire le code de conversion ici
let celsius;

// Conversion Celsius à Fahrenheit
function celsiusToFahrenheit(celsius) {
  // ecrire le code de conversion ici
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  // la ligne suivante ne doit pas être modifiée
  return fahrenheit;
}
console.log(celsiusToFahrenheit(celsius));

// les lignes suivantes ne sont pas à modifier
module.exports = { celsiusToFahrenheit };
