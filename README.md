# react-compound-form

## Description

This is a simple example of a compound `<Form>` component. It uses a parent `<Form>` component to share state between child components such as `<FormInput>` and `<FormSubmitButton>`.

This example also uses other React patterns from Kent C. Dodds' [Epic React Course](https://www.epicreact.dev).

## Usage

```jsx
const handleSubmit = (formData) => console.log(formData);

const myForm = () => (
    <Form>
        <FormInput />
        <FormInput />
        <FormSubmitButton onSubmit={handleSubmit} />
    </Form>
);
```
