import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().min(6, "Min 4 characters").required("Required"),
  });

  const handleSubmit = (values) => {
    if (values.email === "admin" && values.password === "admin1234") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md border border-gray-200"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center text-green-600 mb-2"
        >
          Carin
        </motion.h1>

        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
          Welcome back! Please enter your details.
        </p>

        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => (
            <Form>
              {/* Email */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Email or Username
                </label>
                <div className="flex items-center mt-1 border rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-500">
                  <span className="text-gray-400 mr-2">📧</span>
                  <Field
                    name="email"
                    type="text"
                    placeholder="Enter your email or username"
                    className="w-full bg-transparent outline-none text-sm sm:text-base"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Password */}
              <div className="mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="flex items-center mt-1 border rounded-xl px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-500">
                  <span className="text-gray-400 mr-2">🔒</span>
                  <Field
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-transparent outline-none text-sm sm:text-base"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6 text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <Field
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded"
                  />{" "}
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-green-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-500 hover:bg-green-600 transition text-white py-2 rounded-xl font-medium text-sm sm:text-base"
                type="submit"
              >
                Login
              </motion.button>
              {error ? (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-red-200 shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md border border-gray-200"
                >
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                </motion.div>
              ) : null}
            </Form>
          )}
        </Formik>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <span className="text-green-600 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
}
