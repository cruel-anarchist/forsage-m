// Переключение видимости чата
document.getElementById("chat-toggle").addEventListener("click", () => {
  const chatBody = document.getElementById("chat-body");
  chatBody.style.display =
    chatBody.style.display === "none" || chatBody.style.display === ""
      ? "block"
      : "none";
});

// Часто задаваемые вопросы и quick buttons
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

// Обработчик ввода
function handleInput(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;
    processMessage(message);
    input.value = "";
  }
}

// **Вешаем** обработчик на input
document
  .getElementById("user-input")
  .addEventListener("keydown", handleInput);

function processMessage(message) {
  addMessage("Вы", message);
  const response = getResponse(message.toLowerCase());
  addMessage("Bot", response);
}

function getResponse(msg) {
  for (let question in faq) {
    if (msg.includes(question)) return faq[question];
  }
  return `
    Извините, я не понимаю. Напишите нам на
    <a href="mailto:welcome@forsage-m.ru">welcome@forsage-m.ru</a><br>
    Вы так же можете<br>
    <a href="https://yandex.ru/business/widget/request/company/169055949140"
       target="_blank" class="chat-link-button">
      Записаться на консультацию
    </a>
  `;
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat-messages");
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(p);
  chat.scrollTop = chat.scrollHeight;
}

// Quick buttons
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
