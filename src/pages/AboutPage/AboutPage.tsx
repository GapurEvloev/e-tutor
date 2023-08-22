import styles from "./AboutPage.module.scss";

interface AboutPageProps {
  classes?: string;
}

const AboutPage = ({classes}: AboutPageProps) => {
  return (
    <div className={styles.about}>
      ABOUT PAGE
    </div>
  );
};

export default AboutPage;