'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { IBenefitsGlobal } from '@/@types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.scss';

interface IBenefits {
  heading: string;
  benefits: IBenefitsGlobal[];
}

export default function Slider({ heading, benefits }: IBenefits) {
  return (
    <Container className={styles.benefitsBar}>
      <Row>
        <Col xs={12}>
          <h2>{heading}</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={styles.slideBenefits}>
          <Swiper
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
            className='benefitSlide'
          >
            {benefits.map(({ id, iconSrc, title, subtitle }) => {
              return (
                <SwiperSlide key={id} className={styles.benefitItem}>
                  <Image src={iconSrc} alt='' width={32} height={32} />
                  <div className='caption'>
                    <strong>{title}</strong>
                    <br /> {subtitle}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}
