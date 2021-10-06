import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React, { useEffect, useState } from 'react';
import "./Chat.css";

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (val) => {
        val.preventDefault();
        console.log(input);

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

                
            </div>

            <div className="chat__body">
                <p className={`chat__message  ${true && `chat__reciever`}`}>
                    <span className="chat__name">
                        Madhu
                    </span>
                    Hey fellas
                    <span className="chat__timestamp">
                        6:12PM
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value ={input} onChange = {(e) => setInput(e.target.value)}
                    type="text" placeholder="Type a message"></input>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
