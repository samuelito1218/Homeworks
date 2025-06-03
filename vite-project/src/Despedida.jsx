import React from "react";
import BrowserNavigation from "./BrowserNavigation";
import styles from "./styles/components/Despedida.module.scss";

const Despedirse = () => {
    return (
        <div className={styles.container}>
            <div className={styles.farewellCard}>
                <h1 className={styles.title}>
                    ¡Gracias por escuchar!
                </h1>
                <p className={styles.message}>
                    Ha sido un placer acompañarte en este viaje musical
                    <span className={styles.heart}></span>
                    ¡Esperamos verte pronto de nuevo!
                </p>
                <p className={styles.subtitle}>
                     La música nunca se despide, solo hace una pausa 
                </p>
            </div>
            <BrowserNavigation />
        </div>
    );
};

export default Despedirse;