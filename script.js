const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
   "Silence is the language of God, all else is poor translation. – Rumi",
  "The soul always knows what to do to heal itself. The challenge is to silence the mind. – Caroline Myss",
  "Peace comes from within. Do not seek it without. – Buddha",
  "You are the sky. Everything else – it’s just the weather. – Pema Chödrön",
  "Within you, there is a stillness and a sanctuary to which you can retreat at any time. – Hermann Hesse",
  "The spiritual journey is the unlearning of fear and the acceptance of love. – Marianne Williamson",
  "What you seek is seeking you. – Rumi",
  "When you realize there is nothing lacking, the whole world belongs to you. – Lao Tzu",
  "Don't try to steer the river. – Deepak Chopra"
  ];
  
  function generateQuote() {
    const quote = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[randomIndex];
  }
  