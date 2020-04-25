import React from 'react';
import { Input, Button, Content, Title } from './styled';
import { Form, Field } from "react-final-form";
import { required, mustBeNumber, composeValidators } from '../../utils';

const ControlPanel = ({ onSubmit }) => {  
  return (
    <Content>
      <Title>ControlPanel</Title>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="from" validate={composeValidators(required, mustBeNumber)}>
              {({ input, meta }) => (
                <Input
                  {...input}
                  label="from"
                  variant="outlined"
                  error={meta.error && meta.touched}
                  helperText={meta.error && meta.touched && <span>{meta.error}</span>}
                />
              )}
            </Field>
            <Field name="to" validate={composeValidators(required, mustBeNumber)}>
              {({ input, meta }) => (
                <Input
                  {...input}
                  label="to"
                  variant="outlined"
                  error={meta.error && meta.touched}
                  helperText={meta.error && meta.touched && <span>{meta.error}</span>}
                />
              )}
            </Field>
            <Field name="step" validate={composeValidators(required, mustBeNumber)}>
              {({ input, meta }) => (
                <Input
                  {...input}
                  label="step"
                  variant="outlined"
                  error={meta.error && meta.touched}
                  helperText={meta.error && meta.touched && <span>{meta.error}</span>}
                />
              )}
            </Field>
            <Button variant="contained" color="primary" type="submit" disabled={submitting}>
              Send
            </Button>
          </form>
        )}
      />
    </Content>
  );
};
  
export default ControlPanel;
  