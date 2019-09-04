const SOCKET_URL = 'http://35.157.80.184:8080/';

const socket = io.connect(SOCKET_URL);

const startRecievingMessages = (messageHandler) => socket.on('message', data => messageHandler(data));

const sendMessage = (user, message) => socket.emit('message', {user, message});