import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, isSubmitting, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { postEvents } from "../actions";

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

  async onSubmit(values) {
    await this.props.postEvents(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            label="Body"
            name="body"
            tyoe="text"
            component={this.renderField}
          />
        </div>
        <div>
          <input
            type="submit"
            value="submit"
            disabled={pristine || submitting}
          />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}

//この画面ではEvnetに関する状態を描画しないので、mapStateToPropsは不要
//const mapStateToProps = (state) => ({ events: state.events });

const validate = (values) => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please.";
  return errors;
};

const mapDispatchToProps = { postEvents };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
