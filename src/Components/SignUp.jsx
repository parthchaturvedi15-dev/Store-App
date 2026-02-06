import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profile_picture: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const formFields = [
    { label: 'First Name', name: 'fName', type: 'text' },
    { label: 'Last Name', name: 'lName', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Re-enter Password', name: 'confirmPassword', type: 'password' },
  ];

  const SignupSchema = Yup.object().shape({
    fName: Yup.string().trim().required('First name is required'),
    lName: Yup.string().trim().required('Last name is required'),
    email: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format'
      )
      .required('Email is required'),
    password: Yup.string()
      .matches(/[a-z]/, 'Must contain one lowercase letter')
      .matches(/[A-Z]/, 'Must contain one uppercase letter')
      .matches(/[0-9]/, 'Must contain one number')
      .matches(/[!@#$%^&*()_+]/, 'Must contain one special character')
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await SignupSchema.validate(formData, { abortEarly: false });

      localStorage.setItem('FormData:', JSON.stringify(formData));

      setFormData({
        fName: '',
        lName: '',
        email: '',
        password: '',
        confirmPassword: '',
        profile_picture: '',
      });

      toast.success('User registered successfully');
      navigate('/Login');
    } catch (error) {
      if (error.inner) {
        const newErrors = {};

        error.inner.forEach((err) => {
          if (!newErrors[err.path]) {
            newErrors[err.path] = err.message;
            toast.error(err.message);
          }
        });

        setErrors(newErrors);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-10 rounded-2xl shadow-2xl shadow-blue-600 border border-blue-300 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Create your account
        </h2>

        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-300">
              {field.label}
            </label>

            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className={`w-full bg-black text-white border rounded-lg px-3 py-2 text-sm focus:outline-none transition-all duration-200
                ${
                  errors[field.name]
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                }`}
            />

            {errors[field.name] && (
              <span className="text-red-400 text-xs">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02]"
        >
          Register
        </button>
      </form>
    </div>
  );
}
