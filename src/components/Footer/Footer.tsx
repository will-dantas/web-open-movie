import Logo from '../../assets/logo.png'
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <img src={Logo} alt="logo open movie" />
        <h4 className={styles.headerName}>Open Movie</h4>
      </div>
    </footer>
  );
};