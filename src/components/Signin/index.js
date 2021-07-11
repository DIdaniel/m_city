import React, { useState } from "react";
import { firebase } from "../../firebase";
import { CircularProgress } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = (props) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("맞지 않는 이메일이래용!!")
        .required("오 이메일이 맞았어요!!!"),
      password: Yup.string()
        .required("패스워드가 맞았어요!!")
        .min(5, "10자 이상 팰요해요!"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      submitForm(values);
    },
  });

  const submitForm = (values) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <div className="container">
      <div className="signin_wrapper" style={{ margin: "100px" }}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Login Plz..🥴</h2>
          <input
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error_label">{formik.errors.email}</div>
          ) : null}
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="error_label">{formik.errors.password}</div>
          ) : null}

          {loading ? (
            <CircularProgress color="secondary" className="progress" />
          ) : (
            <button type="submit">LOG IN</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
