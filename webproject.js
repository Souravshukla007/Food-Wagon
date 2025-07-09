document.addEventListener('DOMContentLoaded', () => {

    // Mobile navigation (Hamburger menu)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Chatbot functionality
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatPopup = document.getElementById('chat-popup');
    const closeChat = document.getElementById('close-chat');
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.querySelector('.chat-footer input');
    const chatSendBtn = document.querySelector('.chat-footer button');

    chatbotIcon.addEventListener('click', () => {
        chatPopup.classList.toggle('show');
    });

    closeChat.addEventListener('click', () => {
        chatPopup.classList.remove('show');
    });

    chatSendBtn.addEventListener('click', () => {
        const userMessage = chatInput.value;
        if (userMessage.trim() === '') return;

        // Display user message
        const userMsgHtml = `<p class="user-msg"><strong>You:</strong> ${userMessage}</p>`;
        chatBody.insertAdjacentHTML('beforeend', userMsgHtml);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;


        // Simple bot response
        setTimeout(() => {
            const botMsgHtml = `<p class="bot-msg"><strong>Bot:</strong> Thanks for your message! An agent will be with you shortly.</p>`;
            chatBody.insertAdjacentHTML('beforeend', botMsgHtml);
            chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
        }, 1000);
    });

    // Optional: Close chat if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target !== chatPopup && !chatPopup.contains(event.target) && event.target !== chatbotIcon && !chatbotIcon.contains(event.target)) {
            chatPopup.classList.remove('show');
        }
    });

});
