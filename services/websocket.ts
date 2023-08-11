// Usage: instantiate if one doesn't exist -> setupConnection

export default class ChatroomWebsocket {
  ws: WebSocket;

  constructor() {
    this.ws = new WebSocket('ws://localhost:3123/websocket');
  }

  setupConnection = () => {
    this.ws.onopen = () => {
      console.log('Websocket connected');
    };

    this.ws.onclose = () => {
      console.log('Websocket closed');
    };

    this.ws.onmessage = (res) => {
      console.log(res);
    };

    this.ws.onerror = (err) => {
      console.log(err);
    };
  };

  closeConnection = () => {
    this.ws?.close();
  };

  sendMessage = (message: string) => {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      console.log('Websocket not open or not ready');
    }
  };
}
