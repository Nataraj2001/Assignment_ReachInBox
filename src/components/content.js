import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from "./content.module.css";

const Content = ({ className = "" }) => {
  return (
    <header className={[styles.content, className].join(" ")}>
      <div className={styles.header}>
        <img
          className={styles.logo12Icon}
          loading="lazy"
          alt=""
          src="/logo-12@2x.png"
        />
      </div>
      <FrameComponent />
    </header>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
