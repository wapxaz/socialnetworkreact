import React from 'react';
import postCss from './Post.module.css';

const Post = (props) => {
	return (
            <div className={postCss.item}>
              <img src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg" />
              {props.message}
              <div>
                <span>{props.countlikes} like(s)</span>
              </div>
            </div>            
        )
}

export default Post;