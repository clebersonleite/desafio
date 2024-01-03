'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import BenefitsBar from '@/components/BenefitsBar';
import Brands from '@/components/Brands';
import Products from '@/components/Products';
import BannerText from '@/components/BannerText';
import MyModal from '@/components/Modal';
import { Db } from '../../db';

export default function Home() {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setModalShow(true);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Slider images={Db.images} />
        <BenefitsBar
          heading='Por que comprar na Maeztra?'
          benefits={Db.benefits}
        />
        <Brands heading='Marcas Parceiras' brands={Db.brands} />
        <Products heading='As Mais Pedidas' products={Db.products} />
        <BannerText data={Db.banners} />
      </main>
      <Footer />
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
