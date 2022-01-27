import React, { useEffect, useState } from 'react';
import "./SidebarChats.css";
import { Avatar } from "@material-ui/core";
import { NavLink, useParams } from 'react-router-dom';

function SidebarChats({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        const random = crypto.randomUUID();
        const result = random.replace(/-/gm, '');
        setSeed(result);
    },[]);
    return !addNewChat ? (
        <>
            <NavLink exact="true" to={`/rooms/${id}`} style={{textDecoration:'none',paddingLeft: 5, color:"#111"}}>
                <div className='sidebarChat'>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                    <div className='sidebarChat_info'>
                        <h2 style={
                            {
                                fontSize: "16px",
                                fontFamily: "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif"
                            }
                        }>{name}</h2>
                        <p style={
                            {
                                fontSize: "13.5px",
                                fontFamily: "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                                color: "gray"
                            }
                        }>Last Message...</p>
                    </div>
                </div>
            </NavLink>
        </>
    ) : (
        <>
            <div className='sidebarChat'>
            </div>
        </>
    );
}
export default SidebarChats;
