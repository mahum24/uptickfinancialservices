import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
});

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        validationSchema: FormValidationSchema,
        onSubmit: (values, { resetForm }) => {
            // Handle form submission logic (e.g., API call, etc.)
            // For demo purpose, just show success message
            setIsSubmitted(true);
            // Reset form after submission
            resetForm();
        },
    });

    return (
        <div style={{background: 'rgb(49, 49, 49)'}} className="p-6 flex justify-center items-center pt-10">
            <div className='w-[30%]'>

                <h1 className='text-white font-bold text-center mt-5 mb-5 font-bold text-[36px]'>Get Started</h1>
                {!isSubmitted ? (
                    <form onSubmit={formik.handleSubmit} className="space-y-6 flex flex-col justify-center pb-10">
                        <div>
                            <label htmlFor="firstName" className="block text-white mb-1">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                className={`w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 ${formik.errors.firstName ? 'border-red-500' : ''}`}
                                {...formik.getFieldProps('firstName')}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-white mb-1">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                className={`w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 ${formik.errors.lastName ? 'border-red-500' : ''}`}
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-white mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 ${formik.errors.email ? 'border-red-500' : ''}`}
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-white mb-1">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                className={`w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 ${formik.errors.phone ? 'border-red-500' : ''}`}
                                {...formik.getFieldProps('phone')}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                            ) : null}
                        </div>

                        <button type="submit" className="border border-white text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200">Send</button>
                    </form>
                ) : (
                    <div className="text-white text-center pb-10">
                        <p className="text-xl">Thank you for contacting us!</p>
                        <p className="mt-2">We will get back to you as soon as possible.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
