import { Button, ButtonImg, ButtonWrapper } from "./style";
import arrowright from '../../assets/icons/arrowright.svg'
import arrowleft from '../../assets/icons/arrowleft.svg'



export default function SideBtn({func, state}){
    return(
        <ButtonWrapper>
            <Button onClick={() => func()}>
                <ButtonImg src={state? arrowleft: arrowright} />
            </Button>
        </ButtonWrapper>
    )
}