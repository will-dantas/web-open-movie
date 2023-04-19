import Logo from '../../assets/logo.png'
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={Logo} alt="logo open movie" />
        <h1 className={styles.headerName}>Open Movie</h1>
        <nav>
        </nav>
      </div>
    </header>
  );
};