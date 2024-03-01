import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'

function FormikValidation() {

    // const [personData, setPersonData] = useState({

    const personData = {
        fname: "",
        lname: "",
        email: ""
    }

    const formikdata = useFormik({
        initialValues: personData,
        onSubmit: (values) => {
            console.log("Form data is", values);
        }
    })

    return (
        <>
            <div>
                <form onSubmit={formikdata.handleSubmit}>
                    <label>Enter First name :</label>
                    <input type="text" name="fname" id="" onChange={formikdata.handleChange} value={formikdata.values.fname} />
                    <label>Enter Last Name :</label>
                    <input type="text" name="lname" id="" onChange={formikdata.handleChange} value={formikdata.values.lname} />
                    <label>Enter Email-ID :</label>
                    <input type="text" name="email" id="" onChange={formikdata.handleChange} value={formikdata.values.email} />
                    <button type='submit'>Submit</button>
                </form>

            </div>
        </>
    )
}

export default FormikValidation