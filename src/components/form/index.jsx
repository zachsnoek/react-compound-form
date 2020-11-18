import React from "react";
import { FormContext, formReducer } from "../../context/form-context";

const Form = (props) => {
    const [formData, dispatch] = React.useReducer(formReducer, {});

    return <FormContext.Provider {...props} value={{ formData, dispatch }} />;
};

export { Form };
