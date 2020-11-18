import React from "react";
import {
    useForm,
    onSubmit as contextOnSubmit,
} from "../../context/form-context";

const FormSubmitButton = ({ onSubmit = () => {}, ...props }) => {
    const { dispatch, formData } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        contextOnSubmit(dispatch);
    };

    return <button {...props} type="submit" onClick={handleSubmit} />;
};

export { FormSubmitButton };
