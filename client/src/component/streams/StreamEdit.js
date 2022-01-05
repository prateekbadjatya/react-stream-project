import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import FormComponent from '../../reuseComponents/FormComponent';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {}
  onSubmit = formvalues => {
    this.props.editStream(this.props.match.params.id, formvalues);
  };
  render() {
    if (!this.props.stream) {
      return <div>...Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <FormComponent
          initialValues={this.props.stream}
          onFormSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchStream,
  editStream
})(StreamEdit);
