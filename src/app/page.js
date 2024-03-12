'use client'
import Card from "@/components/card";
import Header from "@/components/layout/header";
import LeaderBoard from "@/components/leaderboard";
import { CardData } from "@/data";


export default function Home() {
  return (
    <section style={{ width: "63%", padding: "2% 0 2% 2%", background: "rgb(243 247 247)" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", borderRight: "1px solid #EBEFF1", paddingRight: "2%" }}>
        <Header />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {CardData.map((item, index) => (
            <Card img={item.img} heading={item.heading} text={item.text} key={index}/>
          ))
          }
        </div>
        <LeaderBoard />
      </div>
    </section>
  );
}
