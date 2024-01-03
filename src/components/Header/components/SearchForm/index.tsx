'use client';
import styles from './styles.module.scss';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

// form
import { Formik } from 'formik';
import * as Yup from 'yup';

export interface ISearchFormValues {
  keyword: string;
}

export default function SearchForm() {
  const initialValues: ISearchFormValues = {
    keyword: '',
  };

  const validationSchema = Yup.object().shape({
    keyword: Yup.string().required('É necessário informar uma palavra-chave!'),
  });

  const formSubmit = (values: ISearchFormValues) => {
    console.log(`Resultados da Busca por ${values.keyword}`);
  };

  return (
    <>
      <Formik<ISearchFormValues>
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
          <form onSubmit={handleSubmit}>
            <Form.Group>
              <input
                type='text'
                id='keyword'
                name='keyword'
                placeholder='O Que Você Busca?'
                value={values.keyword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Form.Group>
            <button className='btn btn-orange' type='submit'>
              Buscar
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
