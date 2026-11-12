const chatForm = document.querySelector("#chat-form");

if (chatForm) {
  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.querySelector("#chat-message");
    const chatWindow = document.querySelector("#chat-window");
    const status = document.querySelector("#chat-status");

    const newMessage = document.createElement("div");
    newMessage.className = "message sent";

    const name = document.createElement("strong");
    name.textContent = "You";

    const messageText = document.createElement("p");
    messageText.textContent = input.value;

    const time = document.createElement("span");
    time.textContent = "Now";

    newMessage.appendChild(name);
    newMessage.appendChild(messageText);
    newMessage.appendChild(time);

    chatWindow.appendChild(newMessage);

    status.textContent = "Your message was added to the chat.";
    input.value = "";
  });
}