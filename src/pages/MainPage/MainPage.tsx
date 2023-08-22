import styles from "./MainPage.module.scss";

interface MainPageProps {
  classes?: string;
}

const MainPage = ({classes}: MainPageProps) => {
  return (
    <div className={styles.main}>
      MAIN PAGE
    </div>
  );
};

export default MainPage;