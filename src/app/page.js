'use client'
import Card from "@/components/card";
import Header from "@/components/layout/header";
import LeaderBoard from "@/components/leaderboard";
import { CardData } from "@/data";
import styles from "./page.module.css"

export default function Home() {
  return (
    <section style={{ padding: "2% 2% 2% 2%", borderRight: "1px solid #EBEFF1", background: "rgb(243 247 247)" }} className={styles.dashboard}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column"}}>
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
