import styles from "./SubTitulos.module.css";

const SubTitulos = ({textoSubTitulo}) => {
  return (
    <h2 className={styles.subTitulo}>{textoSubTitulo}</h2>
  )
}

export default SubTitulos