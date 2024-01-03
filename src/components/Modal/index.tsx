'use client';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import styles from './styles.module.scss';
import NewsletterModal from './components/NewsletterModal';

import { Lato } from 'next/font/google';
import Image from 'next/image';

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
});

interface IModal {
  show: boolean;
  onHide: () => void;
}

export default function MyModal({ show, onHide }: IModal) {
  return (
    <Modal
      show={show}
      size='lg'
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header className='modalHeader'>
        <Button className={styles.closeButton} onClick={onHide}>
          Fechar
        </Button>
      </Modal.Header>
      <Modal.Body className='grid-example'>
        <Container>
          <Row>
            <Col xs={12} md={6} className={styles.boxImage}>
              <Image
                src='/images/modal/modelo.jpg'
                alt=''
                width={805}
                height={532}
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            <Col xs={6} md={6} className={styles.boxForm}>
              <Image
                src='/images/icons/email.svg'
                alt='Icone de E-mail'
                width={28}
                height={30}
              />
              <span>BEM VINDO Á MAEZTRA</span>
              <h3>
                Receba em Primeira mão
                <br />
                <strong>desconto e ofertas exclusivas.</strong>
              </h3>
              <NewsletterModal />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
