import styles from "./Animation.module.css";
export default function Atom() {
  return (
    <div className={styles.container}>
      <div className={styles.nucleus}></div>

      <div className={styles.orbit}>
        <div className={`${styles.electron} ${styles.blue}`}></div>
      </div>

      <div className={styles.orbit2}>
        <div className={`${styles.electron} ${styles.green}`}></div>
      </div>

      <div className={styles.orbit3}>
        <div className={`${styles.electron} ${styles.pink}`}></div>
      </div>
    </div>
  );
}
