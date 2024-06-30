import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const FormValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
    const form = useRef();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        validationSchema: FormValidationSchema,
        onSubmit: (values, { resetForm }) => {
            emailjs
                .sendForm('service_hihgdhw', 'template_5p5neuw', form.current, {
                    publicKey: 'dKW9fJy6GrVl_dPe_',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        navigate('/');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    },
                );


        },
    });

    return (
        <div className="bg-white p-6 flex justify-center items-center pt-10 pb-12">
            <div className="w-full max-w-lg">

                <form ref={form} onSubmit={formik.handleSubmit} className="space-y-6">
                    <div className="mb-2">
                        <label htmlFor="fullName" className="block text-[#747474]  mb-1">Name:</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            className={`w-full px-3 py-1 border-b border-black focus:outline-none focus:border-blue-500 text-gray-700 ${formik.errors.fullName ? 'border-red-500' : ''}`}
                            {...formik.getFieldProps('fullName')}
                        />
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
                        ) : null}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email" className="block text-[#747474]  mb-1">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`w-full px-3 py-1 border-b border-black focus:outline-none focus:border-blue-500 text-gray-700 ${formik.errors.email ? 'border-red-500' : ''}`}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="phone" className="block text-[#747474] mb-1">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            className={`w-full px-3 py-1 border-b border-black focus:outline-none focus:border-blue-500 text-gray-700 ${formik.errors.phone ? 'border-red-500' : ''}`}
                            {...formik.getFieldProps('phone')}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="subject" className="block text-[#747474] mb-1">Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            className={`w-full px-3 py-1 border-b border-black focus:outline-none focus:border-blue-500 text-gray-700 ${formik.errors.subject ? 'border-red-500' : ''}`}
                            {...formik.getFieldProps('subject')}
                        />
                        {formik.touched.subject && formik.errors.subject ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
                        ) : null}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="message" className="block text-[#747474] mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="2"
                            className={`w-full px-3 py-1 border-b border-black focus:outline-none focus:border-blue-500 text-gray-700 ${formik.errors.message ? 'border-red-500' : ''}`}
                            {...formik.getFieldProps('message')}
                        ></textarea>
                        {formik.touched.message && formik.errors.message ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                        ) : null}
                    </div>

                    <button type="submit" className="w-full py-2 px-4 rounded-lg border border-green-600 bg-white text-green-600 font-bold hover:bg-green-600 hover:text-white transition duration-200">Send Message</button>
                </form>

            </div>
        </div>
    );
};

export default ContactForm;
