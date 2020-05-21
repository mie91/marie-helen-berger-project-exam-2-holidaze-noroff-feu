import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";


const schema = yup.object().shape({

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email address is required")

});

function Newsletter({mainheader, subheader}) {

    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        setValidated(true);
    }

    return (
        <>
            
                        <div className="__newsletter">

                            <h2 className="__newsletter-header">{mainheader}</h2>
                            <h3 className="__newsletter-subheader">{subheader}</h3>
                                <Form className="__newsletter-form" inline onSubmit={handleSubmit(onSubmit)}>
                                        
                                    <Form.Control className="__newsletter-input" name="email" placeholder="Enter your E-mail" ref={register} />

                                    <Button className="__newsletter-btn" type="submit">Sign up!</Button>
   
                                    </Form>
                                    {errors.email && <div className="__newsletter-error">{errors.email.message}</div>}

                                    {validated && <div className="__newsletter-validated">You are now signed up successfully!</div>}
                        </div>
                  
        </>
    );
}

export default Newsletter;
