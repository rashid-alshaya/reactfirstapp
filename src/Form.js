import React, { useState } from "react";
import FieldGroup from "./FieldGroup";
import Option from "./Option";
import Field from "./Field";

const fieldMeetsCondition = (values) => (field) => {
  if (field.conditional && field.conditional.field) {
    const segments = field.conditional.field.split("_");
    const fieldId = segments[segments.length - 1];
    return values[fieldId] === field.conditional.value;
  }
  return true;
};

const Form = ({ formData }) => {
  const [currentPageData] = useState(formData[0]);
  const [values, setValues] = useState({});

  const fieldChanged = (fieldId, value) => {
    console.log(fieldId);
    console.log(value);
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // todo - send data somewhere
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2>{currentPageData.label}</h2>
      {currentPageData.fields
        .filter(fieldMeetsCondition(values))
          .map((field) => {
            switch (field.component) {
              case "field_group":
                return (
                  <FieldGroup
                    key={field._uid}
                    field={field}
                    fieldChanged={fieldChanged}
                    values={values}
                  />
                );
              case "options":
                return (
                  <Option
                    key={field._uid}
                    field={field}
                    fieldChanged={fieldChanged}
                    value={values[field._uid]}
                  />
                );
                default:
                  return (
                    <Field
                      key={field._uid}
                      field={field}
                      fieldChanged={fieldChanged}
                      value={values[field._uid]}
                    />
                  );
                }
            })}
        <hr />
        <button onClick={() => console.log(values)}>Dump form data</button>
    </form>
  );
};

export default Form;
