import { SearchIcon, SearchInput, SearchWrapper } from "../style";
import search from "../../../../assets/icons/search.svg"



export default function SearchBar(){

    return(
        <SearchWrapper>
            <SearchIcon src={search} alt="Search here" />
            <SearchInput placeholder="Search here" type="text" name="search" />
        </SearchWrapper>
    )
}