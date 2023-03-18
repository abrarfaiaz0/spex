import styles from "@/styles/Productcard.module.css";

function Productcard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>Image</div>
      <div>
        <span>abccd</span>
        <span>121</span>
      </div>
    </div>
  );
}

export default Productcard;
