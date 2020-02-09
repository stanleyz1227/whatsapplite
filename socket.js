import io from "./socket.io"

const apiUrl = "http://168.122.1.161:3050";
 
class Socket {

    socket = null;
    
    constructor(displayName) {
        this.socket = io(apiUrl);
        this.displayName = displayName;
    }

    sendMessage(message) {
        this.socket.emit("message", {username: this.displayName, message: message});
    }

}
export default Socket;