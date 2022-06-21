import React from 'react';
import profileCss from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
	return <div>
        <div>
          <img src="https://s1.cdn.autoevolution.com/images/news/compact-suv-comparison-finds-bmw-x1-is-better-than-mercedes-gla-and-audi-q3-115365_1.jpg" />
        </div>
        <div>
          <div>
            <img src="https://www.celebsmoney.com/wp-content/uploads/net-worth/nala-cat-image.jpg" />
          </div>
          <div>
            Описание
          </div>
        </div>
        <MyPosts />
      </div>
}

export default Profile;