import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../../history';
import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';
const StreamDelete = props => {
  const deleteStream = () => {
    props.deleteStream(props.match.params.id);
  };
  const actions = (
    <>
      <Link to="/" className="ui button">
        Cancel
      </Link>
      <button onClick={deleteStream} className="ui primary button">
        Delete
      </button>
    </>
  );
  console.log('this.props.match.params.id', props.match.params.id);

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure want to Delete Streams?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     prop: state.prop
//   };
// };

export default connect(null, {
  deleteStream
})(StreamDelete);
