'use client'
import { ChatCount, ChatHeading, ChatWrapper, TopWrap, ChatIcon, ChatBtn } from "./style";
import Tab from "./tab";
import send from "../../assets/icons/send.svg"
import { useContext, useEffect, useState } from "react";
import FloatingChat from "./floatChat";
import { ChatData } from "@/data";
import { SwitchContext } from "@/context";



export default function ChatBlock(){
    const { open, toggleOpen, data, addData } = useContext(SwitchContext);
    useEffect(() => {
        addData(
            ChatData[0].name,
            {
                name: ChatData[0].name,
                time: ChatData[0].time,
                text: ChatData[0].text
            }
        )
    }, [])

    function Open(name, time, text){
        addData(
            name,
            {
            name: name,
            time: time,
            text: text
        });

        toggleOpen();
    }

    return(
        <>
            <ChatWrapper>
                <TopWrap>
                    <ChatHeading>Chats</ChatHeading>
                    <ChatCount>{ChatData.length}</ChatCount>
                </TopWrap>
                {ChatData.map((item, index) => (
                    <Tab profile={item.profile} 
                        title={item.name} 
                        text={item.text} 
                        unread={item.name !== data.who? 1 : 0} 
                        key={index} 
                        event={() => Open(
                            item.name,
                            item.time,
                            item.text
                        )} 
                    />
                ))}
            </ChatWrapper>
            <ChatBtn onClick={() => toggleOpen()}>
                <ChatIcon src={send} alt="chats" />
            </ChatBtn>
            {open && <FloatingChat />}
        </>
    )
}