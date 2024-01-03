import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const borderButton = false;

interface IIconButton {
  bordered?: boolean;
  icon: string;
  text: string;
  url: string;
  iconWidth?: number;
  iconHeight?: number;
  alt?: string;
}

export default function IconButton({
  bordered = false,
  icon,
  text,
  url,
  iconWidth = 14,
  iconHeight = 16,
  alt = "",
}: IIconButton) {
  return (
    <Link
      className={`${styles.iconButton} ${bordered && styles.bordered}`}
      href={url}
    >
      <Image src={icon} alt={alt} width={iconWidth} height={iconHeight} />
      {text}
    </Link>
  );
}
