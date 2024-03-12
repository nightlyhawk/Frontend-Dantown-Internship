import { TagDot, TagText, TagWrapper } from "./style";




export default function Tag({text}){
    let color1;
    let color2;

    switch (text){
        case "Cyclist":
            color1 = "#DAFDFF"
            color2 = "#3DEBF6"
            break;

        case "Skaters":
            color1 = "#E7F7F8"
            color2 = "#54BCBD"
            break;

        case "Yogas":
            color1 = "#FFECE8"
            color2 = "#F4694C" 
            break;       
    }

    return (
        <TagWrapper color={color1}>
            <TagDot colorii={color2}></TagDot>
            <TagText>{text}</TagText>
        </TagWrapper>
    )
}