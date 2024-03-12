"use client"
import React, { createContext, useEffect, useState } from "react";


export const SwitchContext = createContext({
    open: false,
    toggleOpen: () => {},
    message: {},
    sendMessage: () => {},
    data: {},
    addData: () => {}
});

export const SwitchProvider = ({children}) => {
    const currentDate = new Date();
    const [open, setToggle] = useState(false);
    const [data, setData] = useState({
        who: "",
        texts:[]
    })
    const [message, setMessage] = useState({
        name: "Jamet Roy",
        time: 0,
        text: ""
    })
    const toggleOpen = () => {
        setToggle(prev => (prev? false: true));
    };

    const addData = (who, message) => {
        setData({
            who: who,
            texts: [message]
        });
    }
    const sendMessage = (value) => {
        setData(prev => ({
            ...prev,
            texts: [...prev.texts, value]
        }));
    }

    // useEffect(() => {
    //     setData(prev => ({
    //         ...prev,
    //         texts: [...prev.texts, message]
    //     }));
    // }, [message])

    return (
        <SwitchContext.Provider value={{ open, toggleOpen, message, sendMessage, data, addData }}>
            {children}
        </SwitchContext.Provider>
    )
}