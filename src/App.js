import React from "react";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Max
          </a>
          <div className="metadata">
            <span className="date">Today at 19:34</span>
          </div>
          <div className="text">How artistic!</div>
        </div>
      </div>
    </div>
  );
};
export default App;
