"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./components/NewsletterForm";
import ListItem from "./components/ListItem";

export default function Footer() {
  const informaçõesLinks = [
    { href: "/", label: "Quem Somos" },
    { href: "/", label: "Prazo de Envio" },
    { href: "/", label: "Trocas e Devoluções" },
    { href: "/", label: "Promoções e Cupons" },
  ];

  const minhaContaLinks = [
    { href: "/", label: "Minha Conta" },
    { href: "/", label: "Meus Pedidos" },
    { href: "/", label: "Cadastre-se" },
  ];

  const ondeEncontrarLinks = [
    { href: "/", label: "Lojas" },
    { href: "/", label: "Endereço" },
  ];

  return (
    <>
      <section className={styles.newsletterContainer}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={7}>
              <Newsletter />
            </Col>
          </Row>
        </Container>
      </section>
      <footer className={styles.footerBox}>
        <Container>
          <Row className="justify-content-center">
            <ListItem
              title="Informações"
              xs={12}
              md={4}
              lg={3}
              links={informaçõesLinks}
            />
            <ListItem
              title="Minha Conta"
              xs={12}
              md={4}
              lg={2}
              links={minhaContaLinks}
            />
            <ListItem
              title="Onde nos Encontrar"
              xs={12}
              md={4}
              lg={2}
              links={ondeEncontrarLinks}
            />
          </Row>
        </Container>
        <section className={styles.copyright}>
          <Container>
            <Row className="align-items-center">
              <Col>
                <ul className={styles.socialIcons}>
                  <li>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/icons/facebook.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/icons/in.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/icons/instagram.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/icons/youtube.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul className={styles.paymentsBrands}>
                  <li>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/icons/visa.svg"
                        alt=""
                        width={32}
                        height={25}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/icons/mastercard.svg"
                        alt=""
                        width={32}
                        height={25}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/icons/visa.svg"
                        alt=""
                        width={32}
                        height={25}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/icons/mastercard.svg"
                        alt=""
                        width={32}
                        height={25}
                      />
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul className={styles.poweredBrands}>
                  <li>
                    <span>Powered by:</span>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/brands/vtex.svg"
                        alt=""
                        width={68}
                        height={26}
                      />
                    </Link>
                  </li>
                  <li>
                    <span>Developed by:</span>
                    <Link href="/" target="_blank">
                      <Image
                        src="/images/brands/maeztra.svg"
                        alt=""
                        width={119}
                        height={30}
                      />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
}
