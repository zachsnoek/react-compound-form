import React from "react";
import { Form, FormInput, FormSubmitButton } from "./components";

const styles = {
    formGroup: {
        margin: "1rem 0",
    },
    input: {
        display: "block",
    },
    submittedData: {
        margin: "2rem 0",
        color: "green",
    },
};

function App() {
    const [submittedFormData, setSubmittedFormData] = React.useState(undefined);

    const handleSubmit = (formData) => {
        setSubmittedFormData(formData);
    };
    return (
        <div>
            <Form>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <FormInput
                        id={"username"}
                        placeholder="Your username"
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <FormInput
                        id={"password"}
                        type="password"
                        placeholder="Your password"
                        style={styles.input}
                    />
                </div>
                <FormSubmitButton onSubmit={handleSubmit}>
                    Submit Form
                </FormSubmitButton>
            </Form>
            {submittedFormData && (
                <div style={styles.submittedData}>
                    Data submitted:
                    <pre>{JSON.stringify(submittedFormData)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
