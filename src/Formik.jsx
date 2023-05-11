import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    agree: yup.boolean().required("u must agree term of use"),
});

const WithMaterialUI = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            agree: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <>
        <div className='main'>
        <div className="img">
            <img src="https://www.hostgator.com/blog/wp-content/uploads/2020/06/Online-Forums-Benefits-and-Best-Practices.jpg" alt="#" />
        </div>
        <div className='forum'>
            <div className='sign'>Sign In</div>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Adress"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                /><br/><br/>
                <TextField
                    fullWidth
                    id="password"
                    name="password "
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                /><br/>
                <div className="checkbox topMargin">
                                <input type="checkbox" value={formik.values.agree} onChange={formik.handleChange} id="agree" />
                                <label htmlFor="agree" className="checkbox-label"> <span className='span'>Remember me</span> </label>
                            </div>
                            {formik.errors.agree && formik.touched.agree && (
                                <div className="input-feedback">{formik.errors.agree}</div>
                            )}
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Sign In
                </Button>
            </form>
            <div className='form'>
                <div><a href="#">Forgot password?</a></div>
                <div><a href="#">Don't have an account?Sign Up</a></div>
            </div>
            <div className="copy">
            Copyright © Your Website 2023.
            </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default WithMaterialUI