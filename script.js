// Hash map for encryption and decryption
const colorCipherMap = {
    A: "red", B: "blue", C: "green", D: "orange", E: "purple",
    F: "yellow", G: "pink", H: "cyan", I: "brown", J: "gray",
    K: "lime", L: "magenta", M: "teal", N: "navy", O: "olive",
    P: "maroon", Q: "gold", R: "silver", S: "coral", T: "aqua",
    U: "lavender", V: "indigo", W: "turquoise", X: "salmon",
    Y: "chocolate", Z: "orchid"
  };
  
  const reverseMap = Object.fromEntries(Object.entries(colorCipherMap).map(([k, v]) => [v, k]));
  
  // Encrypt Function
  function encrypt(text) {
    return text
      .toUpperCase()
      .split("")
      .map(char => colorCipherMap[char] || char)
      .join(" ");
  }
  
  // Decrypt Function
  function decrypt(text) {
    return text
      .split(" ")
      .map(word => reverseMap[word.toLowerCase()] || word)
      .join("");
  }
  
  // Handle Buttons
  document.getElementById("encryptBtn").addEventListener("click", () => {
    const input = document.getElementById("inputText").value;
    document.getElementById("outputText").textContent = encrypt(input);
  });
  
  document.getElementById("decryptBtn").addEventListener("click", () => {
    const input = document.getElementById("inputText").value;
    document.getElementById("outputText").textContent = decrypt(input);
  });
  
  // Dark Mode Toggle
  document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const icon = document.getElementById("icon");
    icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
  
  // Voice Command
  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = event => {
      const spokenText = event.results[0][0].transcript;
      document.getElementById("inputText").value = spokenText;
    };
  
    document.getElementById("voiceCommandBtn").addEventListener("click", () => {
      recognition.start();
    });
  }
  