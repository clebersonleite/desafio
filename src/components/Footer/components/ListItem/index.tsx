'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

interface ILinksList {
  href: string;
  label: string;
}

interface ILink {
  title: string;
  links: ILinksList[];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export default function ListItem({
  title,
  links,
  xs = 12,
  sm = 4,
  md = 4,
  lg = 3,
}: ILink) {
  const toggleListVisibility = (e: any) => {
    let elemento = e.nextElementSibling;

    if (elemento.style.display === 'none' || !elemento.style.display) {
      elemento.style.display = 'block';
    } else {
      elemento.style.display = 'none';
    }
  };

  return (
    <Col xs={xs} md={md} lg={lg} className={styles.listaLinks}>
      <h4
        onClick={(e) => {
          toggleListVisibility(e.target);
        }}
      >
        {title}
      </h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </Col>
  );
}
