import { CardContainer, CardDetail, CardHeading, CardImg, CardText, CardWrapper } from "./style";




export default function Card({img, heading, text}){
    return(
        <CardWrapper>
            <CardContainer>
                <CardImg src={img} />
            </CardContainer>
            <CardDetail>
                <CardHeading>{heading}</CardHeading>
                <CardText>{text}</CardText>
            </CardDetail>
        </CardWrapper>
    )
}