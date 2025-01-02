import React from "react";
import styles from './titleBlock.module.scss';
import { pacifico } from '@/app/fonts';

export default function TitleBlock({ text } : {text: string}): React.ReactElement {
  return (
    <div className={`${styles.titleBlock} ${pacifico.className}`}>
      {text}
    </div>
  );
}
