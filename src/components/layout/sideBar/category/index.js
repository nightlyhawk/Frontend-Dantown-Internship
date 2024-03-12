import { CategoryHeading, CategoryContainer, CategoryIcon, CategoryItem, CategoryText, CategoryWrapper } from "./style";
import { CategoryData } from "@/data";




export default function Category(){

    return(
        <CategoryWrapper>
            <CategoryHeading>Category</CategoryHeading>
            <CategoryContainer>
                {CategoryData.map((item, index) => (
                    <CategoryItem key={index}>
                        <CategoryIcon src={item.icon} alt={item.text} />
                        <CategoryText>{item.text}</CategoryText>
                    </CategoryItem>
                ))

                }
            </CategoryContainer>
        </CategoryWrapper>
    )
}