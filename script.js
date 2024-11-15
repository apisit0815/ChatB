const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatOutput = document.getElementById('chat-output');

const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! Thanks for asking.",
    "what's your name": "I'm a friendly chatbot created to assist you!",
    "bye": "Goodbye! Have a great day!",
    "default": "Sorry, I didn't understand that. Could you please rephrase?"
};

// Function to append messages to the chat window
function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Function to handle user input and bot responses
function handleUserInput() {
    const userInput = chatInput.value.trim().toLowerCase();
    if (userInput === "") return;

    // Display user's message
    appendMessage(userInput, 'user-message');

    // Generate bot response
    const botResponse = responses[userInput] || responses["default"];
    setTimeout(() => {
        appendMessage(botResponse, 'bot-message');
    }, 500);

    // Clear the input field
    chatInput.value = '';
}

// Add event listener for the Send button
sendBtn.addEventListener('click', handleUserInput);

// Handle Enter key press
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});
