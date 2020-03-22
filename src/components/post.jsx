import React from "react";

const Post = ({post}) => {
  const{title,body} = post;
  return (
    <div className="col-sm-12 mx-auto col-md-12 col-lg-12">
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="display-6 lead">{title}</h5>
          <p className="card-text">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
