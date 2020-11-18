import React from "react";

export const FormContext = React.createContext();
FormContext.displayName = "FormContext";

export const formReducer = (state, action) => {
    switch (action.type) {
        case "input":
            return { ...state, [action.id]: action.value };
        case "submit":
            return {};
        default:
            throw new Error(
                [
                    "Invalid action type for formReducer.",
                    "Valid actions are: input and submit.",
                ].join(" ")
            );
    }
};

export const onInputChange = (dispatch, inputId, inputValue) => {
    dispatch({ type: "input", id: inputId, value: inputValue });
};
export const onSubmit = (dispatch) => {
    dispatch({ type: "submit" });
};

export const useForm = () => {
    const value = React.useContext(FormContext);

    if (!value) {
        throw new Error(
            [
                "FormContext's value is not defined.",
                "You probably forgot to render your component within a <Form>.",
                "Check that your component is within a <Form> and try again.",
            ].join(" ")
        );
    }

    return value;
};
