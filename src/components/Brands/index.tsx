'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { IBrandsGlobal } from '@/@types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './styles.module.scss';

interface IBrands {
  heading: string;
  brands: IBrandsGlobal[];
}

export default function Slider({ heading, brands }: IBrands) {
  return (
    <Container className={styles.brandsBar}>
      <Row>
        <Col xs={12}>
          <h2>{heading}</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={styles.slideBrand}>
          <Swiper
            slidesPerView={1.1}
            spaceBetween={15}
            breakpoints={{
              640: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.1,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
            className='brandsSlide'
          >
            {brands.map(({ id, imageSrc }) => {
              return (
                <SwiperSlide key={id} className={styles.brandItem}>
                  <Image
                    src={imageSrc}
                    alt=''
                    width={308}
                    height={64}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}
