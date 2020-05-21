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
                        <div className="newsletter">
                            <h2 className="newsletter__header">{mainheader}</h2>
                            <h3 className="newsletter__subheader">{subheader}</h3>
                                <Form className="newsletter__form" inline onSubmit={handleSubmit(onSubmit)}>
                                        
                                    <Form.Control className="newsletter__input" name="email" placeholder="Enter your E-mail" ref={register} />

                                    <Button className="newsletter__btn" type="submit">Sign up</Button>
   
                                    </Form>
                                    {errors.email && <div className="newsletter__error">{errors.email.message}</div>}

                                    {validated && <div className="newsletter__validated">You are now signed up successfully!</div>}
                        </div>
                  
        </>
    );
}

export default Newsletter;
