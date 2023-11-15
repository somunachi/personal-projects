import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    channel:"",
    complaints: ""
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

function YoutubeForm() {
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    //     //validate
    // });

    // console.log("form errors", formik.errors);

  return (
  <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
       <div className='mainContainer'>
       <Form className='formContainer'>

<div className='form-control'>
<label htmlFor="name">Name</label>
    <Field 
        type="text" 
        id='name' 
        name='name' 
    />
    <ErrorMessage name='name'/>
</div>

 <div className='form-control'>
 <label htmlFor="email">Email</label>
    <Field 
        type="email" 
        id='email' 
        name='email' 
    />
    <ErrorMessage name='email' />

 </div>


   <div className='form-control'>
   <label htmlFor="channel">Channel</label>
    <Field 
        type="text" 
        id='channel' 
        name='channel' 

    />
    <ErrorMessage name='channel'/>
   </div>

   <div className='form-control'>
   <label htmlFor="complaints">Complaints</label>
    <Field as='textarea'
        id='complaints' 
        name='complaints' 

    />
   </div>
    <button type='submit'>Submit</button>
</Form>
       </div>
  </Formik>
  )
}

export default YoutubeForm