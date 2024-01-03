"use client";

import styles from "./styles.module.scss";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

// form
import { Formik } from "formik";
import * as Yup from "yup";

export interface INewsletterFormValues {
  email: string;
}

export default function SearchForm() {
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
    <div className={styles.boxNewsletterForm}>
      <h2>Recebe Nossa Newsletter</h2>
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
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
