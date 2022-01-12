import { io } from "socket.io-client";
import { URL_SOCKET } from "../constants/urls";

export default class SocketService {
  init() {
    return io(URL_SOCKET);
  }
}
