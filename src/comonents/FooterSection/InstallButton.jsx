import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const InstallButton = () => {
  return (
    <div className="d-flex justify-content-center p-2">
      <button className={styles.button_2} role="button">
        <span className={styles.text}>
          <FontAwesomeIcon icon={faGooglePlay} />
          Install Now
        </span>
      </button>
    </div>
  );
};

export default InstallButton;
