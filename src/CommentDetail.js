import React from "react";
import { faker } from "@faker-js/faker";

const CommentDetail = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
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

export default CommentDetail;
