import { TabContainter, TabImg, TabLit, TabText, TabTitle, TabWrapper } from "./style";



export default function Tab({profile, title, text, unread, event}){

    return(
        <TabWrapper onClick={() => event()}>
            <TabImg color={profile} />
            <TabContainter>
                <TabTitle>{title}</TabTitle>
                <TabText>{text}</TabText>
            </TabContainter>
            {unread > 0 && <TabLit>{unread}</TabLit>}
        </TabWrapper>
    )
}