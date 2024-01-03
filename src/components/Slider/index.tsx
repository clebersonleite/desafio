"use client";

import { Carousel } from "react-bootstrap";
import Image from "next/image";
import { ISliderGlobal } from "@/@types";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

interface ISlider {
  images: ISliderGlobal[];
}

export default function Slider({ images }: ISlider) {
  return (
    <Carousel
      nextIcon={
        <Image src="/images/slide/next.svg" alt="" width={20} height={32} />
      }
      prevIcon={
        <Image src="/images/slide/prev.svg" alt="" width={20} height={32} />
      }
      fade
    >
      {images.map(
        ({
          id,
          imageSrc,
          imageMobileSrc,
          title,
          text,
          textButton,
          buttonUrl,
        }) => {
          return (
            <Carousel.Item className={styles.carouselItem} key={id}>
              <figure>
                <Image
                  src={imageSrc}
                  className={styles.imageDesktop}
                  alt=""
                  fill
                />
                <Image
                  src={imageMobileSrc}
                  className={styles.imageMobileSrc}
                  alt=""
                  fill
                />
              </figure>
              <div className={`${styles.newCaption} ${montserrat.className}`}>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={buttonUrl}>{textButton}</Link>
              </div>
            </Carousel.Item>
          );
        }
      )}
    </Carousel>
  );
}
