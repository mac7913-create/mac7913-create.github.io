

// Random Space Fact (Home Page)
function showFact() {
  const facts = [
    "A day on Venus is longer than a year on Venus.",
    "There are more stars than grains of sand on Earth.",
    "Neutron stars are incredibly dense.",
    "Space is completely silent because there is no atmosphere."
  ];

  displayRandomFact("fact", facts);
}


// Cosmic Facts (Others Page)
function cosmicFact() {
  const facts = [
    "Black holes can bend time and space.",
    "Comets develop tails when near the Sun.",
    "Asteroids can contain rare metals.",
    "Nebulae are where stars are born."
  ];

  displayRandomFact("cosmicFactText", facts);
}

// Reusable function
function displayRandomFact(elementId, factsArray) {
  const random = factsArray[Math.floor(Math.random() * factsArray.length)];
  document.getElementById(elementId).innerText = random;
}



function submitForm(event) {
  event.preventDefault();

  document.getElementById("formMessage").innerText =
    "🚀 Houston Recieved Your Message successfully!";
}


window.onload = function () {
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning, explorer! 🌅";
  } else if (hour < 19) {
    greeting = "Good afternoon, explorer! ☀️";
  } else {
    greeting = "Good evening, explorer! 🌙";
  }

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.innerText = greeting;
  }
};