"use client";
import { useCallback, useEffect, useState } from "react";
import style from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [fixed, setFixed] = useState<boolean>(false);
  const onScroll = useCallback((event: Event) => {
    const { pageYOffset, scrollY } = window;

    if (pageYOffset > 10) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
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
      <nav className={style.nav}>
        <ul>
          <li>
            {" "}
            <Link
              className={pathname === "/" ? style.active : ""}
              href="/"
            >
              home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={pathname === "/region" ? style.active : ""}
              href="/region"
            >
              region
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={pathname === "/Linkbout" ? style.active : ""}
              href="/Linkbout"
            >
              Linkbout
            </Link>
          </li>
        </ul>
      </nav>
      <Image
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
