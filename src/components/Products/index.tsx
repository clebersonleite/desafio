"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { IProductsGlobal } from "@/@types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./styles.module.scss";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Value from "./components/Value";

interface IProducts {
  heading: string;
  products: IProductsGlobal[];
}

interface ICurrency {
  value: number;
}

export default function Slider({ heading, products }: IProducts) {
  return (
    <Container className={styles.productsContainer}>
      <Row>
        <Col xs={12}>
          <h2>{heading}</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={styles.slideProducts}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1.1}
            spaceBetween={15}
            breakpoints={{
              640: {
                slidesPerView: 1.1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
            className="productsSlide"
          >
            {products.map(
              ({
                productId,
                productImageUrl,
                productPrice,
                productTitle,
                productExcerpt,
                productUrl,
                productColors,
              }) => {
                return (
                  <SwiperSlide key={productId} className={styles.productItem}>
                    <figure className={styles.imageBox}>
                      <Link href="/">
                        <Image
                          src={productImageUrl}
                          alt=""
                          width={308}
                          height={381}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Link>
                    </figure>
                    <div className={styles.boxProductColors}>
                      <ul>
                        {productColors.map(({ colorId, colorCode }) => {
                          return (
                            <li key={colorId}>
                              <Link
                                href="/"
                                className={styles.variationColorLink}
                                style={{ backgroundColor: colorCode }}
                              ></Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className={styles.productDetails}>
                      <span className={styles.productPrice}>
                        <Value value={productPrice} />
                      </span>
                      <h3 className={styles.productTitle}>{productTitle}</h3>
                      <p>{productExcerpt}</p>
                      <Link href="/" className={styles.btnAddCart}>
                        Adicionar
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}
