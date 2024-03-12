import { MiniText, MiniWrapper, NavIcons, NavImage, NavItems, NavWrapper } from "./style";
import email from "../../../assets/icons/email.svg";
import notificationOn from "../../../assets/icons/notificationOn.svg";
import profile from "../../../assets/images/profile.svg";
import arrowdown from "../../../assets/icons/arrowdown.svg";



export default function MiniNav(){

    return(
        <NavWrapper>
            <NavItems>
                <NavIcons src={email} alt="email"/>
            </NavItems>
            <NavItems>
                <NavIcons src={notificationOn} alt="notifications" />
            </NavItems>
            <MiniWrapper>
                <NavImage src={profile} alt="Jamet Roy"/>
                <MiniText>Jamet Roy</MiniText>
                <NavIcons src={arrowdown} alt="drop down"/>
            </MiniWrapper>
        </NavWrapper>
    )
}