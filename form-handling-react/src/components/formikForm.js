// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form data", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" value={values.username} />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" value={values.email} />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" value={values.password} />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
