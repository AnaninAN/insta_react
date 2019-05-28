import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg"
                alt="Man"
                name="some_cool_man"
            />
            <Palette/>
        </div>
    )
}

export default Profile;