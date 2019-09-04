const isValid = message => message.trim().length;
const clearInput = () => messageInput.value = '';
const scrollToBottom = element => element.scrollTop = element.scrollHeight;
const getCurrentUser = form => form.elements.nickName.value;
const getMessage = form => form.elements.message.value;

const currentUser = getCurrentUser(chatForm);

const createMessageElement = ({user, message}) => {
    const messageContainer = document.createElement('div');

    if (currentUser === user) {
        messageContainer.classList.add('own-message');
        messageContainer.textContent = message;
    } else {
        messageContainer.textContent = `${user}: ${message}`;
    };

    return messageContainer;
}

const appendMessageElement = (element) => contentElement.appendChild(element);