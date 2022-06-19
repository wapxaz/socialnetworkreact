import React from 'react';
import profileCss from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
	return (
        <div>
          <div>
            Пост
              <div>
                <textarea></textarea>
                <button>Добавить пост</button>
              </div>
          </div>
          <div className={profileCss.posts}>
            <Post message="Привет, это мой первый пост" countlikes="1" />
            <Post message="Постище" countlikes="2" />
            <Post message="Крутая погода" countlikes="33" />
            <Post message="Твиттер умер" countlikes="4" />
            <Post message="Да здравствует новая социальна сеть!" countlikes="77" />
          </div>
        </div>
        )
}

export default MyPosts;