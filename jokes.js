const jokes = [
  "I'm not lazy, I'm just on energy-saving mode.",
  "अगर कामचोरी एक कला होती, तो मैं कलाकार होता।",
  "Sarcasm is my cardio.",
  "इतनी पढ़ाई कर ली कि अब किताबें मुझे देखकर डर जाती हैं।",
  "I’m not arguing, I’m just explaining why I’m right.",
  "पढ़ाई से ऐसा डर लगता है जैसे रिश्तेदारों से शादी में।",
  "Some people graduate with honors, I am just honored to graduate.",
  "जो सोया वो खोया, और जो पढ़ा वो भी रोया।"
];

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}
