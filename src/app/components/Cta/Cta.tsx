import React from "react";
import Link from "next/link";
import styles from "./cta.module.scss";

export default function Cta({
  link,
  label,
}: {
  link: string;
  label: string;
}): React.ReactElement {
  return (
    <Link href={link}>
      <div className={`${styles.cta}`}>{label}</div>
    </Link>
  );
}
