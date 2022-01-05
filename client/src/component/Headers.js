import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Headers = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Headers;

// client id:
// 248662871590-jb0k93mpltob62krpubcrfurih5vcab2.apps.googleusercontent.com

//
// secret:
// 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
