  
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  }

  function addMessageToLog(message, isUser = false) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (isUser) {
      messageElement.classList.add('user');
      messageElement.innerHTML = `
        <img class="user-image" src="user-image.png" alt="User">
        <span>${message}</span>
      `;
    } else {
      messageElement.classList.add('chatbot');
      messageElement.innerHTML = `
        <img class="chatbot-image" src="chatbot.png" alt="Chatbot">
        <span>${message}</span>
      `;
    }
    chatLog.appendChild(messageElement);
  }
  
  function handleUserInput() {
    const messageInput = document.getElementById('message-input');
    const userMessage = messageInput.value;
    addMessageToLog(userMessage, true);
    messageInput.value = '';
  
    const botResponse = generateBotResponse(userMessage);
    addMessageToLog(botResponse);
  
    const chatLog = document.getElementById('chat-log');
    chatLog.scrollTop = chatLog.scrollHeight;

  }
  
  function generateBotResponse(userMessage) {
    const userInput = userMessage.toLowerCase();
  
    if (userInput.includes('hello') || userInput.includes('hi')) {
      return 'Hii! How can I help you';
    } else if (userInput.includes('help')) {
      return 'I am here to assist you. How can I help?';
    }else if (userInput.includes('what is the application deadline')) {
      return 'Application deadline is 7 july 2023';
    }else if (userInput.includes('materials')) {
      window.location.href = 'https://www.sciastra.com/materials/';
      return 'Redirecting you to the Admissions page...';
    } else if (userInput.includes('courses')) {
      window.location.href = 'https://www.sciastra.com/courses/';
      return 'Redirecting you to the Courses page...';
    } else if (userInput.includes('home')) {
      window.location.href = 'https://www.sciastra.com/';
      return 'Redirecting you to the Home page...';
    }else if (userInput.includes('selections')) {
        window.location.href = 'https://www.sciastra.com/selections/';
        return 'Redirecting you to the Home page...';
    }else {
      return 'I\'m sorry, I didn\'t understand. Please try again.';
    }
  }
  
  function randomResponse(responsesArray) {
    const randomIndex = Math.floor(Math.random() * responsesArray.length);
    return responses
  }

  function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatToggle = document.getElementById('chat-toggle');
  
    chatContainer.classList.toggle('collapsed');
    chatToggle.classList.toggle('collapsed');
  }

  function toggleChatbox() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle('expanded');
  }