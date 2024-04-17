import { TableContainer, TableData, TableHead, TableHeader, TableHeading, TableIcon, TableProfile, TableInfo, TableRow, TableText, TableWrapper, TableProfileapper, TableBody, TableExtraHead, FirstShape, PolygonText } from "./style";
import Tag from "./tags";
import { FriendsData } from "@/data";
import dotdot from "../../assets/icons/dotdot.svg"
import crown from "../../assets/icons/crown.svg"


export default function LeaderBoard(){

    return(
        <TableWrapper>
            <TableHeading>
                <TableExtraHead>Friends Rank</TableExtraHead>
                <TableIcon src={dotdot} />
            </TableHeading>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableHeader position='center'>Rank</TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Category</TableHeader>
                        <TableHeader>Points</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {FriendsData.map((item, index) => (
                        <TableRow key={index}>
                            {item.rank === 1 ? 
                                <TableData none="none">
                                    <FirstShape>
                                        <PolygonText>
                                        {item.rank}
                                        </PolygonText>
                                    </FirstShape>
                                </TableData>
                                :
                                <TableData none="none">{item.rank}</TableData>
                            }
                            <TableData>
                                <TableInfo>
                                    <TableProfile   bg={item.profile} />
                                    <TableText>{item.name}</TableText>
                                    {item.rank === 1 && <TableIcon src={crown} alt="Top Dog" />}
                                </TableInfo>
                            </TableData>
                            <TableData>
                                <Tag text={item.category}/>
                            </TableData>
                            <TableData>
                                {item.points}
                            </TableData>
                        </TableRow>
                    ))

                    }
                </TableBody>
            </TableContainer>
        </TableWrapper>
    )
}