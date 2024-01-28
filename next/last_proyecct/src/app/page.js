import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "./components/gallery";
import Buttons from "./components/buttons";
import Tabs from "./components/tabs";
import Facts from "./components/facts";
import Profile from "./components/profile";
export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.container}>
        <Profile picture="perfil_picture.jpeg" name={"Victor Alvarado"} profession={"Software Engineer"}/>
        <Facts/>
        <Buttons/>
        <Tabs/>
        <Gallery/>
        </div>
    </main>
  );
}
