import Image from "next/image";
import style from "./MovieFeature.module.css";

import testImg from "./picture/movie1.jpg";
import Link from "next/link";

import IconArrowUpRight from "@/components/ui/icons/arrow-up-right.svg";

export default function MovieFeatue() {
  return (
    <div className={style.wrapper}>
      <div className={style.poster}>
        <Image
          width={250}
          height={250}
          src={testImg}
          alt="Mission Impossible"
          className={style.image}
        />
      </div>

      <div className={style.content}>
        <p className={style.smallTitle}>SLEDEĆI VELIKI FILM</p>

        <h1 className={style.title}>
          Mission: Impossible -
          <br />
          The Final Reckoning
        </h1>

        <p className={style.info}>Akcija | Triler | 2h 45min</p>

        <p className={style.description}>
          Ethan Hunt se vraća u svojoj poslednjoj misiji. U bioskopima širom Srbije od 2. maja.
        </p>

        <div className={style.bottom}>
          <div className={style.timeWrapper}>
            <div className={style.timeBox}>
              <span className={style.number}>20</span>
              <span className={style.label}>DANA</span>
            </div>

            <div className={style.timeBox}>
              <span className={style.number}>07</span>
              <span className={style.label}>SATI</span>
            </div>

            <div className={style.timeBox}>
              <span className={style.number}>13</span>
              <span className={style.label}>MIN</span>
            </div>
          </div>

          <Link href="/" className={style.button}>
            Obavesti me <IconArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
