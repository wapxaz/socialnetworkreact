import React from 'react';
import profileCss from './Profile.module.css';

const Profile = () => {
	return <div className={profileCss.content}>
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
        <div>
          Пост
            <div>
              Новый пост
            </div>
        </div>
        <div>
          <div>
            Пост 1
          </div>
          <div>
            Пост 2
          </div>
        </div>
      </div>
}

export default Profile;