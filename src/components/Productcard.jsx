import styles from "@/styles/Productcard.module.css";

function Productcard(props) {
  const name = props.name;
  const price = props.price;
  const number = props.number;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={`assets/p${number}.png`} alt="product"></img>
      </div>
      <div className={styles.info}>
        <span className={styles.name}>GUCCI-02U</span>
        <span className={styles.price}>1400 USD</span>
      </div>
    </div>
  );
}

export default Productcard;
