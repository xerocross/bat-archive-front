import React, { Component } from "react";
import Post from "./post";

class PostList extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const data = await response.json();

        console.log(data);
        if (data.length > 5) {
          data.length = 5;
        }
        this.setState(() => {
          return {
            data
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Posts</h1>
        <div className="row">
          {this.state.data.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostList;
