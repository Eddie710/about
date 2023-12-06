import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>
        Edward Dana's Portfolio
      </h1>
      <p className={styles.desc}>
        Check out my portfolio please!
      </p>
      <Button url="https://eddie710.github.io/Year-1-Portfolio-Projects/" text="See My Portfolio" />
    </div>
    
  </div>

  )
}





