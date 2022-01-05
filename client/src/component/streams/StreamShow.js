import React from 'react';
import { connect } from 'react-redux';
import flvjs from 'flv.js';
import { fetchStream } from '../../actions';
class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.flvPlayer.destroy();
  }

  buildPlayer() {
    if (this.flvPlayer || !this.props.stream) {
      return;
    }
    this.flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  render() {
    if (!this.props.stream) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{this.props.stream.title}</h1>
        <p>{this.props.stream.description}</p>
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
  fetchStream
})(StreamShow);

/* const { NodeMediaServer } = require('node-media-server');
we need to change the import to this:

const NodeMediaServer = require('node-media-server'); */
