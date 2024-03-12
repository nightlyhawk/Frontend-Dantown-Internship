import { FloatBubbleWrap, FloatBubble, FloatText } from "./style";



export default function Bubble({name, time, text}){

    return(
    <FloatBubbleWrap position={name !== "Jamet Roy"? "flex-start":"flex-end"}>
        {name !== "Jamet Roy"?
            <>
                <FloatBubble bg={"#E0F3F3"}>
                    <FloatText>{text}</FloatText>
                </FloatBubble>
                <FloatText>{time}</FloatText>
            </>
            :
            <>
                <FloatText>{time}</FloatText>
                <FloatBubble bg={"#5DC2C4"}>
                    <FloatText>{text}</FloatText>
                </FloatBubble>
            </>
        }
    </FloatBubbleWrap>

    )
}