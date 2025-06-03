import React from "react";
import BrowserNavigation from "./BrowserNavigation";
import styles from "./styles/components/Home.module.scss";

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.welcomeCard}>
                <h1 className={styles.title}>
                    Bienvenido
                </h1>
                <p className={styles.subtitle}>¿Listo para escuchar música increíble?</p>
            </div>
            <BrowserNavigation />
        </div>
    );
}

export default Home;