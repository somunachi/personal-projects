import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    channel:""
}
const onSubmit = values => {
    console.log('Form data', values);
}
// const validate = values => {
//     let errors = {}

//     if(!values.name){
//         errors.name = "This field should not be empty!"
//     }
//     if(!values.email){
//         errors.email = "This is a required field!"
//     } else if (!/^[A-Z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = "Invalid email format"
//     }
//     if(!values.channel){
//         errors.channel = "Enter your channel!"
//     }
//     return errors
// }

const validationSchema = Yup.object({
    name: Yup.string().required('This field should not be empty!'),
    email: Yup.string().email('Invalid email format').required('This is a required field!'),
    channel: Yup.string().required('Enter your channel!')
})

function OldYoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate
    });

    console.log("form errors", formik.errors);

  return (
    <div className='formContainer'>
        <form onSubmit={formik.handleSubmit}>

        <div className='form-control'>
        <label htmlFor="name">Name</label>
            <input 
                type="text" 
                id='name' 
                name='name' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.name} 
            />
                {formik.touched.name && formik.errors.name ? <div className='errors'>{formik.errors.name}</div> : null}
        </div>

         <div className='form-control'>
         <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id='email' 
                name='email' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
                {formik.touched.email && formik.errors.email ? <div className='errors'>{formik.errors.email}</div> : null}
         </div>


           <div className='form-control'>
           <label htmlFor="channel">Channel</label>
            <input 
                type="text" 
                id='channel' 
                name='channel' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.channel}
            />
                {formik.touched.channel && formik.errors.channel ? <div className='errors'>{formik.errors.channel}</div> : null}
           </div>


            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default OldYoutubeForm