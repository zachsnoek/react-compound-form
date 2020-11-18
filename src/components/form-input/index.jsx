import React from "react";
import PropTypes from "prop-types";
import { useForm, onInputChange } from "../../context/form-context";

const FormInput = ({ id, ...props }) => {
    const { formData, dispatch } = useForm();

    const handleChange = (e) => {
        onInputChange(dispatch, e.target.id, e.target.value);
    };

    return (
        <input
            id={id}
            type="text"
            {...props}
            value={formData[id] || ""}
            onChange={handleChange}
        />
    );
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
};

export { FormInput };
