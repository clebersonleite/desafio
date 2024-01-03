"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { IBannersGlobal } from "@/@types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.scss";

interface IBanners {
  data: IBannersGlobal[];
}

export default function BannerText({ data }: IBanners) {
  return (
    <>
      <Container className={styles.bannersBar}>
        {data.map(({ id, imageUrl, text, title }) => {
          return (
            <Row className={styles.bannersRow} key={id}>
              <Col xs={12} lg={4} className={styles.bannerTextBox}>
                <h2>{title}</h2>
                <p>{text}</p>
              </Col>
              <Col xs={12} lg={8} className={styles.bannerImage}>
                <Image
                  src={imageUrl}
                  alt={title}
                  width={1114}
                  height={480}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}
