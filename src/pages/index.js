import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import newsection from "@/styles/New.module.css";
import herosection from "@/styles/Hero.module.css";
import collectionsection from "@/styles/Collections.module.css";
import findussection from "@/styles/Findus.module.css";

import Productcard from "@/components/Productcard";
import Brands from "@/components/Brands";
import Collectioncard from "@/components/Collectioncard";

export default function Home() {
  return (
    <>
      <Head>
        <title>spex.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.herosection}>
        <nav className={herosection.nav}>
          <div className={herosection.menubutton}>
            <button>=</button>
          </div>
          <div className={herosection.logo}>
            <a>spex.</a>
          </div>
          <div className={herosection.navright}>
            <div>a</div>
            <div>b</div>
            <div>cadadaddassd</div>
          </div>
        </nav>
        <div className={herosection.typography}>
          <div className={herosection.typographyleft}>
            <div className={herosection.typographyleftcontent}>
              <div className={herosection.herotitle}>
                GALLERY<br></br>&nbsp;&nbsp;&nbsp;OPTICIAN
              </div>
            </div>
            <div className={herosection.typographyleftcontent}>
              Wide range of sunglasses<br></br> and frames from world brands
            </div>
            <button className={herosection.typographyleftcontent}>
              CATALOG &nbsp;⟶
            </button>
          </div>
          <div className={herosection.scrolldown}> SCROLL DOWN ⟶ </div>
        </div>
      </section>
      <section className={styles.newsection}>
        <div className={styles.title}>
          WHAT&apos;S NEW
          <a className={styles.explore} href="#">
            VIEW MORE ⟶{" "}
          </a>
        </div>
        <div className={newsection.new}>
          <Productcard number="1" />
          <Productcard number="2" />
          <Productcard number="3" />
        </div>
      </section>
      <section className={styles.brandssection}>
        <div className={styles.title}>BRANDS</div>
        <Brands />
        <a className={styles.explore} href="#">
          ALL BRANDS ⟶{" "}
        </a>
      </section>

      <section className={styles.collectionsection}>
        <div className={styles.title}>COLLECTION</div>
        <div className={collectionsection.collections}>
          <Collectioncard number="1" />
          <Collectioncard number="2" />
          <Collectioncard number="3" />
        </div>
        <div className={collectionsection.drag}>DRAG TO SEE MORE</div>
      </section>
      <section className={styles.findussection}>
        <div>
          <img src="assets/shelf.jpg"></img>
        </div>
        <div className={styles.title}>
          <div>
            HOW TO
            <br></br>
            &nbsp;&nbsp;&nbsp;FIND US
          </div>
          <div className={findussection.buttons}>
            <button>
              <span>KIEV</span>
              <span>⟶</span>
            </button>
            <button>
              <span>ODESSA</span>
              <span>⟶</span>
            </button>
            <button>
              <span>KHARKIV</span>
              <span>⟶</span>
            </button>
            <button>
              <span>DNIPRO</span>
              <span>⟶</span>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.instagramsection}></section>
      <footer>asdasd</footer>
    </>
  );
}
