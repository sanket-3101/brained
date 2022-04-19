import React from 'react';
import io from "socket.io-client"; 


export const socket = io('', { transports: ['websocket'] });
export const SocketContext = React.createContext();