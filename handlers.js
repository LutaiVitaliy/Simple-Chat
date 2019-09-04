const onMessageHandler = (data) => {
    const element = createMessageElement(data);
    appendMessageElement(element);
    scrollToBottom(contentElement);
};

const onSendMessageHandler = event => {
    event.preventDefault();

    const message = getMessage(chatForm);

    if (isValid(message)) {
        sendMessage(currentUser, message);
        clearInput(messageInput);
    };
};