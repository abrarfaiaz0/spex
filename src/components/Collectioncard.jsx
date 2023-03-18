import styles from "@/styles/Collectioncard.module.css";

function Collectioncard(props) {
  const name = props.name;
  const price = props.price;
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="assets/p1.png" alt="product"></img>
      </div>
      <div className={styles.info}>
        <span className={styles.name}>GUCCI-02U</span>
        <span className={styles.price}>1400 USD</span>
      </div>
    </div>
  );
}

export default Collectioncard;
