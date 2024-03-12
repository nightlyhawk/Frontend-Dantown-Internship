import { FloatHeader, FloatHeading, FloatWrapper, FloatChat, FloatText, FloatInputContainer, FloatIcon, FloatInput, FloatInputWrapper, FloatBtn, FloatTag, FloatSendBtn, FloatEmoji } from "./style";
import close from "../../../assets/icons/close.svg"
import emoji from "../../../assets/icons/emoji.svg"
import send from "../../../assets/icons/send.svg"
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState, useContext, useRef } from "react";
import Bubble from "./bubble";
import { SwitchContext } from "@/context";


export default function FloatingChat(){
    const { open, toggleOpen, data, sendMessage } = useContext(SwitchContext);
    function Close(){
        toggleOpen();
    }
    const [message, setMessage] = useState({
        name: "Jamet Roy",
        time: 0,
        text: ""
    })
    const currentDate = new Date();
    const [showEmojis, setShowEmojis] = useState(false);
    // const addEmoji = (e) => {
    //     let sym = e.unified.split("-");
    //     let codesArray = [];
    //     sym.forEach((el) => codesArray.push("0x" + el));
    //     let emoji = String.fromCodePoint(...codesArray);
    //     setMessage(prevState => ({
    //         ...prevState,
    //         time: currentDate.toLocaleTimeString(),
    //         text: prevState.text + emoji
    //     }));
    // };
    const addEmoji = (e) => {
        enter.current.value = enter.current.value + " " + e.emoji
        setMessage(prevState => ({
            ...prevState,
            time: currentDate.toLocaleTimeString(),
            text: prevState.text + " " + e.emoji
        }));
    }
    function handleChange(event){
        const target = event.target;
        console.log("text:", target.value)
        setMessage(prevState => ({
            ...prevState,
            time: currentDate.toLocaleTimeString(),
            text: target.value
        }));
    }
    const enter = useRef(null);
    // useEffect(() => {
    //     const handleKeyPress = (event) => {
    //         if (event.key === "Enter") {
    //             event.preventDefault();
    //             sendMessage({ name: "Jamet Roy", time: currentDate.toLocaleTimeString(), text: event.target.value });
    //         }
    //     };
    //     enter.current.addEventListener('keypress', handleKeyPress)
    //     return () => {
    //       enter.current.removeEventListener('keypress', handleKeyPress)
    //     }
    // }, []);
    function handleSubmit(){
        sendMessage(message);
    }

    return(
        <FloatWrapper>
            <FloatHeader>
                <FloatHeading>{data.who}</FloatHeading>
                <FloatIcon src={close} alt="close" onClick={() => Close()} />
            </FloatHeader>
            <FloatChat>
                <FloatTag>
                    <FloatText>Today</FloatText>
                </FloatTag>
                {data.texts.map((item, index) => (
                    <Bubble name={item.name} time={item.time} text={item.text} key={index} />
                ))
                }
            </FloatChat>
            <FloatInputWrapper>
                <FloatInputContainer>
                    <FloatInput ref={enter} type="text" placeholder="Type here..." name="Text" onChange={(e) => handleChange(e)} />
                    <FloatBtn onClick={() => setShowEmojis(!showEmojis)}>
                        <FloatIcon src={emoji} alt="emoji picker" />
                    </FloatBtn>
                    {showEmojis && (
                        <FloatEmoji>
                            <EmojiPicker
                                searchPlaceHolder="Enter here" 
                                emojiStyle="apple"
                                searchDisabled={false}
                                lazyLoadEmojis={false}
                                onEmojiClick={(e) => addEmoji(e)}
                                previewConfig={{
                                    showPreview: true,
                                    defaultEmoji: "1f92a",
                                    defaultCaption: "Sir emoji"
                                }}
                            />
                        </FloatEmoji>
                    )}
                </FloatInputContainer>
                <FloatSendBtn onClick={handleSubmit}>
                    <FloatIcon src={send} alt="click to send" />
                </FloatSendBtn>
            </FloatInputWrapper>
        </FloatWrapper>
    )
}