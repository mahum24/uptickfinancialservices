import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const FormValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
});

const GetStartedForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            lastName: '',
            email: '',
            phone: '',
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
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
            setIsSubmitted(true);
            resetForm();
        },
    });

    return (
        <div style={{ background: 'rgb(49, 49, 49)' }} className="p-6 flex justify-center items-center pt-10">
            <div className='w-[30%]'>
                <h1 className='text-white font-bold text-center mt-5 mb-5 font-bold text-[36px]'>Get Started</h1>
                {!isSubmitted ? (
                    <form ref={form} onSubmit={formik.handleSubmit} className="space-y-6 flex flex-col justify-center pb-10">
                        <div>
                            <label htmlFor="fullName" className={`block text-[#747474] mt-[-20px] ${formik.values.fullName ? 'hidden' : ''}`}>First Name</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                autoComplete="off"
                                className={`w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 ${formik.errors.fullName ? 'border-red-500' : ''}`}
                                {...formik.getFieldProps('fullName')}
                            />
                            {formik.touched.fullName && formik.errors.fullName ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="lastName" className={`block text-[#747474]  mt-[-20px] ${formik.values.lastName ? 'hidden' : ''}`}>Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="off"
                                className={`w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 ${formik.errors.lastName ? 'border-red-500' : ''}`}
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="email" className={`block text-[#747474] mt-[-20px] ${formik.values.email ? 'hidden' : ''}`}>Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                className={`w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-blue-500 ${formik.errors.email ? 'border-red-500' : ''}`}
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="phone" className={`block text-[#747474] mt-[-20px] ${formik.values.phone ? 'hidden' : ''}`}>Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                autoComplete="off"
                                className={`w-full border-b-2 border-white bg-inherit text-white focus:outline-none focus:border-blue-500 ${formik.errors.phone ? 'border-red-500' : ''}`}
                                {...formik.getFieldProps('phone')}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                            ) : null}
                        </div>

                        <button type="submit" className="w-[80%] m-auto border border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-200">Send</button>
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

export default GetStartedForm;
