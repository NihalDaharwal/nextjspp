import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Nav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="">
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link href="/" className={styles.navbarLink}>
                Home
              </Link>
            </li>

            <li className={styles.navbarItem}>
              <Link href="/about" className={styles.navbarLink}>
                About
              </Link>
            </li>

            <li className={styles.navbarItem}>
              <Link href="/movie" className={styles.navbarLink}>
                Movie
              </Link>
            </li>

            <li className={styles.navbarItem}>
              <Link href="/contact" className={styles.navbarLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
