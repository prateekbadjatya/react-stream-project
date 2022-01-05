import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = isSignedIn => {
    // console.log('call every time when user sign our sign out');
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });

    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            onClick={() => this.auth.signOut()}
            className="ui red google button"
          >
            <i className="google icon">Sign Out</i>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={() => this.auth.signIn()}
            className="ui red google button"
          >
            <i className="google icon">Sign In With Google</i>
          </button>
        </div>
      );
    }
  }
  render() {
    return <>{this.renderAuthButton()}</>;
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut
})(GoogleAuth);
