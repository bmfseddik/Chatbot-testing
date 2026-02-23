function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value;
    const chatbox = document.getElementById("chatbox");

    if (message === "") return;

    chatbox.innerHTML += "<p><b>You:</b> " + message + "</p>";

    let reply = getBotReply(message);

    setTimeout(() => {
        chatbox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);

    input.value = "";
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello")) {
        return "Hi there!";
    } 
    else if (message.includes("how are you")) {
        return "I'm just code, but I'm doing great!";
    } 
    else if (message.includes("bye")) {
        return "Goodbye!";
    }
    else {
        return "I don't understand that yet.";
    }
}
