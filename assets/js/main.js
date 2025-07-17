// Переключение видимости чата
document.getElementById("chat-toggle").addEventListener("click", () => {
  const chatBody = document.getElementById("chat-body");
  chatBody.style.display = chatBody.style.display === "none" || chatBody.style.display === "" ? "block" : "none";
});

const faq = {
  "где вы находитесь": "Мы находимся в Москве, ул. Ленина, 47, стр. 2.",
  "какие марки обслуживаете": "Мы специализируемся на BMW и MINI.",
  "какие услуги вы оказываете": "Диагностика, ремонт, ТО, замена масла и многое другое.",
  "как записаться": "Вы можете оставить заявку через форму на сайте или по номеру +7(495)727-66-52.",
  "режим работы": "Мы работаем с вторника по субботу с 10:00 до 19:00.",
};

const quickQuestions = [
  "Где вы находитесь?",
  "Какие услуги вы оказываете?",
  "Как записаться?",
  "Режим работы",
  "Какие марки обслуживаете?"
];

function toggleChat() {
  const body = document.getElementById("chat-body");
  body.style.display = body.style.display === "none" ? "block" : "none";
}

function handleInput(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;
    processMessage(message);
    input.value = "";
  }
}

function processMessage(message) {
  addMessage("Вы", message);
  const lower = message.toLowerCase();
  const response = getResponse(lower);
  addMessage("Bot", response);
}

function getResponse(msg) {
  for (let question in faq) {
    if (msg.includes(question)) return faq[question];
  }
  return "Извините, я не понимаю. Напишите нам на welcome@forsage-m.ru";
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat-messages");
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(p);
  chat.scrollTop = chat.scrollHeight;
}

function renderButtons() {
  const container = document.getElementById("chat-buttons");
  quickQuestions.forEach(q => {
    const btn = document.createElement("button");
    btn.innerText = q;
    btn.onclick = () => processMessage(q);
    container.appendChild(btn);
  });
}

renderButtons();
