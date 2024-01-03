import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

interface IMainMenu {
  selected?: boolean;
}

export default function MainMenu({ selected }: IMainMenu) {
  return (
    <nav className={styles.mainMenu}>
      <ul>
        <li>
          <Link href="/" className={styles.selected}>
            <Image src="/images/icons/news.svg" alt="" width={16} height={16} />
            Novidades
          </Link>
        </li>
        <li>
          <Link href="/">Vestidos</Link>
        </li>
        <li>
          <Link href="/">Roupas</Link>
        </li>
        <li>
          <Link href="#">Sapatos</Link>
        </li>
        <li>
          <Link href="#">Lingerie</Link>
        </li>
        <li>
          <Link href="#">Acessórios</Link>
        </li>
        <li>
          <Link href="#">OUTLET</Link>
        </li>
      </ul>
    </nav>
  );
}
