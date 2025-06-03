import React from "react";
import BrowserNavigation from "./BrowserNavigation";
import styles from "./styles/components/DoubleLinkedListPagina.module.scss";

const DoublyLinkedListPagina = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>
                 Navegación del Historial
            </h1>
            <p className={styles.pageSubtitle}>
                Explora el historial de navegación usando una lista doblemente enlazada
            </p>
            <div className={styles.content}>
                <BrowserNavigation />
            </div>
        </div>
    );
};

export default DoublyLinkedListPagina;