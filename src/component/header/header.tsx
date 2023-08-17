"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import style from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [fixed, setFixed] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const showNavBar = (): void => {
    navRef?.current?.classList?.toggle(style.activeNav);
  };

  const onScroll = useCallback((event: Event) => {
    const { pageYOffset, scrollY } = window;

    if (pageYOffset > 10) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <header className={`${style.navBar} , ${fixed ? style.navBarScroll : ""}`}>
      <Image
        className={style.logo}
        src="/logo.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <nav ref={navRef}>
        <ul>
          <li>
            {" "}
            <Link className={pathname === "/" ? style.active : ""} href="/">
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={pathname === "/region" ? style.active : ""}
              href="/region"
            >
              REGION
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={pathname === "/blog" ? style.active : ""}
              href="/blog"
            >
              BLOG
            </Link>
          </li>
        </ul>
      </nav>
      <Image
        onClick={showNavBar}
        className={style.menu}
        src="/menu.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </header>
  );
};
export default Header;
