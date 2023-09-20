let textbox = document.querySelector("#textbox");
let button = document.querySelector("#btn");
let voiceSelect = document.querySelector("#select");

let speech = new SpeechSynthesisUtterance();

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[6];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
  speech.text = textbox.value;

  window.speechSynthesis.speak(speech);
});
