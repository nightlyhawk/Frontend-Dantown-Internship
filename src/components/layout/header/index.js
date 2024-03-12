import SearchBar from "./searchBar";
import { HeaderContainer, HeaderHeading, HeaderText, HeaderWrapper } from "./style";




export default function Header(){

    return(
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderHeading>Hey Dustin</HeaderHeading>
                <HeaderText>Welcome back, nice to see you again!</HeaderText>
            </HeaderContainer>
            <SearchBar />
        </HeaderWrapper>
    )
}