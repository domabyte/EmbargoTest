import React, { useState,useEffect } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFile from "@mui/icons-material/AttachFile";
import MoreVert from "@mui/icons-material/MoreVertOutlined";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import "./Messages.css";

function Messages(props) {
    const { random, chatdiff } = props;
    console.log(props);
    const [input, setInput] = useState("");
    const [name, setName] = useState('');

    useEffect(() => {
        if (random) {
            setName(`john ${random}`);
        }
    }, [random]);

    const handleChange = React.useCallback((event)=>setInput(event.target.value),[setInput]);

    const icons = [
        {
            id: 0, logoName: SearchOutlined
        }, {
            id: 1, logoName: AttachFile
        }, {
            id: 2, logoName: MoreVert
        }
    ];

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed in ??", input);
        setInput('');
    }
    return (
        <div className='messages'>
            <div className='chat_header'>
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${name}.svg`}
                    sx={{ width: 56, height: 56 }}
                    style={{cursor:"pointer"}}
                />
                <div className='chat_headerInfo'>
                    <h2>{chatdiff}</h2>
                    <p>Last Seen at...</p>
                </div>
                <div className='chat_headerRight'>
                    {icons.map(e => <IconButton key={e.id}><e.logoName fontSize='small' /></IconButton>)}
                </div>
            </div>
            <div className='chat_body'>
                {/* {messages.map((message)=>{
            })} */}
            <div className='_33LGR' tabIndex="0">
            <div className='_2AL2u'></div>
            <div className='y8WcF' tabIndex="-1" role="region">
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Hey Guys...
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>
            
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Hey Guys...
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Hey Guys...
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Hey Guys...
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Hey Guys...
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Hey Guys...
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Hey Guys...
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa, tempore deserunt odit dolores animi 
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>
                <p className={`chat_message ${false && 'chat_receiver'}`}>
                    <span className='chat_name'>Dikshit Singh</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis aliquid ullam obcaecati unde odio nesciunt hic beatae vitae blanditiis?
                    <span className='chat_timestamps'>
                        3:52pm
                    </span>
                </p>

</div>
            </div>

            </div>
            <div className='chat_footer'>
            <div className='chat_footer1'>
            <div className='chat_footer2'>
            <div className='meIcon1'>
                <IconButton><InsertEmoticonIcon /></IconButton>
                </div>
                <div className='meInput'>
                <form>
                    <input type="text" placeholder='Type a message' value={input} onChange={handleChange} />
                    <button type='submit' onClick={sendMessage}>Send a Message</button>
                </form>
                </div>
                <div className='meIcon2'>
                <IconButton><MicIcon /></IconButton>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Messages;
