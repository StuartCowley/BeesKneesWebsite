import React from "react";
import styles from './contentWrap.module.scss';

export default function ContentWrap({ children } : {children: React.ReactElement}): React.ReactElement {
  return (
    <div className={`${styles.contentWrap}`}>
      {children}
    </div>
  );
}
