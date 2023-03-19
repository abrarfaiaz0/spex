import styles from "@/styles/Collectioncard.module.css";

function Collectioncard(props) {
  const name = props.name;
  const number = props.number;

  return (
    <div className={styles.card}>
      <div className={styles.number}>001</div>
      <div className={styles.image}>
        <img src={`assets/col${number}.jpg`} alt="product"></img>
      </div>
      <div className={styles.name}>CARTIER COLLECTION</div>
    </div>
  );
}

export default Collectioncard;
