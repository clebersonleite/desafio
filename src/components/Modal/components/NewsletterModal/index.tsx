"use client";

import styles from "./styles.module.scss";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Image from "next/image";

// form
import { Formik } from "formik";
import * as Yup from "yup";

export interface INewsletterFormValues {
  email: string;
}

export default function NewsletterModal() {
  const initialValues: INewsletterFormValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("É necessário informar um e-mail válido!"),
  });

  const formSubmit = (values: INewsletterFormValues) => {
    console.log(`E-mail cadastrado com sucesso: ${values.email}`);
  };

  return (
    <div className={styles.boxNewsletterModal}>
      <Formik<INewsletterFormValues>
        initialValues={initialValues}
        onSubmit={formSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <Form.Group>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite o seu e-mail"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Form.Group>

            <button className="btn btn-orange" type="submit">
              Enviar
              <Image
                src="/images/icons/paper_plane.svg"
                alt=""
                width={14}
                height={13}
              />
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
