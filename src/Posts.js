import React, { Component } from 'react';
import Image from './Image';
import User from './User';
import Text from './Text';
import Likes from './Likes';
import Comments from './Comments';
import Comment from './Comment'

class Posts extends Component {
  render() {
    return (
      <div className="row justify-content-center">
          <div className="card">
              <div className="card-block">
                  <User/>
                  <Image/>
                  <Likes/>
                  <Text/>
                  <Comments/>
                  <Comment/>
              </div>
          </div>
      </div>
    );
  }
}

export default Posts;