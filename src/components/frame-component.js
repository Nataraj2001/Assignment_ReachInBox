import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.contentInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.xquareLabsBw1Parent}>
          <img
            className={styles.xquareLabsBw1}
            alt=""
            src="/xquare-labs-bw-1@2x.png"
          />
          <div className={styles.facebookParent}>
            <div className={styles.facebook}>Facebook</div>
            <div className={styles.xcom}>X.com</div>
            <div className={styles.linkedin}>Linkedin</div>
            <div className={styles.instagram}>Instagram</div>
          </div>
        </div>
        <div className={styles.planaireAllRights}>
          © 2024 Reachinbox. All rights reserved.
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
