import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import FormComponent from '../../reuseComponents/FormComponent';

class StreamCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = formvalues => {
    this.props.createStream({ ...formvalues });
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <FormComponent onFormSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(null, {
  createStream
})(StreamCreate);
