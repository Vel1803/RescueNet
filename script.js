function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.start();

  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    document.getElementById("output").innerText = "You said: " + text;

    detectEmergency(text);
  };
}

function detectEmergency(text) {
  let response = "";

  if (text.includes("fire")) {
    response = "Fire detected. Move to a safe area.";
  } else if (text.includes("accident")) {
    response = "Accident detected. Stay calm and check injuries.";
  } else {
    response = "No emergency detected.";
  }

  document.getElementById("alert").innerText = response;
  speak(response);
}

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}
