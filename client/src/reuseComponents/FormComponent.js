import React from 'react';
import { Field, reduxForm } from 'redux-form';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = formProps => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? 'error' : ''
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = formvalues => {
    this.props.onFormSubmit({ ...formvalues });
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = formvalues => {
  const error = {};
  if (!formvalues.title || !formvalues.description) {
    error.title = 'You must entered a title';
  }
  if (!formvalues.description) {
    error.description = 'You must entered a description';
  }

  return error;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(FormComponent);
