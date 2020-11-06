import React, { useCallback, useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Style from './ChatViewStyle';
import socketio from 'socket.io-client';

export const ChatView = () => {
    const [messages, setMessages] = useState([])
    const [messageChat, setMessageChat] = useState("");
    const [view, setView] = useState(false);
    const [room, setRoom] = useState("");
    const [viewRoom, setViewRoom] = useState(false);
    const [email, setEmail] = useState("");
    const [ws, setWs] = useState({});

    const initSocketIo = useCallback(() => {
        const socket = socketio("http://127.0.0.1:31337");
        socket.on("message", data => {
            console.log("cool", data);
            setMessages(prevState => [...prevState, { ...data, kind: "user" }]);
        });
        socket.on("system-message", data => {
            console.log("MESSAGGIO DI SISTEMA: ", data);
            setMessages(prevState => [...prevState, { ...data, kind: "system" }]);
        });
        setWs(socket);
    });

    const TextChatHandler = (e) => {
        setMessageChat(e.currentTarget.value);
    }

    const SendTextChatHandler = () => {
        if (messageChat != "") {
            // console.log(ws);
            // setView(true)
            ws.emit("message", { sender: "david", content: messageChat })
            document.getElementById("test").value = "";
        } else { alert("Write something") }

    }

    const TriggerSendButton = (e) => {
        if (e.keyCode === 13) {
            SendTextChatHandler()
        }
    }

    const CloseViewRoom = () => {
        setViewRoom(false)
    }

    const RoomHandler = (e) => {
        setRoom(e.currentTarget.value)
    }

    const NameHandler = (e) => {
        setEmail(e.currentTarget.value)
    }

    useEffect(() => {
        initSocketIo()
    }, []);

    useEffect(() => {
        console.log("messagies", messages);
    }, [messages])

    const TriggerButtonRoom = (e) => {
        if (e.keyCode === 13) {
            CloseViewRoom()
        }
    }

    return (

        < Style.MainContentChat >
            {viewRoom ?
                <div style={{ height: "50%", width: "25%", position: "absolute", backgroundColor: "#f5daa5" }}>
                    <label>Write your room<input type="text" onChange={RoomHandler} onKeyDown={TriggerButtonRoom} /></label>
                    <label>Write your Name<input type="text" onChange={NameHandler} onKeyDown={TriggerButtonRoom} /></label>
                    <button style={{ cursor: "pointer" }} onClick={CloseViewRoom} >Open Room</button>
                </div>
                : null
            }
            {
                "Room name: " + room
            }
            <Style.SectionChatView>
                {messages.map(elem => {
                    return (
                        <div>{elem.content}</div>
                    )
                })

                }
                <Style.SectionTypeText>
                    <Style.InputFieldTypeChat placeholder="Type your message" id="test" onChange={TextChatHandler} onKeyDown={TriggerSendButton} />
                    <Style.ChatSendButton type="button" value="Send" onClick={SendTextChatHandler}></Style.ChatSendButton>
                </Style.SectionTypeText>
            </Style.SectionChatView>
        </Style.MainContentChat >
    )
}