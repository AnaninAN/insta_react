import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="http://static1.repo.aif.ru/1/b2/762139/fcbf24c503219775ad5a43aab46194e4.jpg"
                alt="prince"
                name="user_prince"
            />
            <div className="users__block">
                <User
                    src="http://static1.repo.aif.ru/1/b2/762139/fcbf24c503219775ad5a43aab46194e4.jpg"
                    alt="prince"
                    name="user_prince"
                    min
                />
                <User
                    src="http://static1.repo.aif.ru/1/b2/762139/fcbf24c503219775ad5a43aab46194e4.jpg"
                    alt="prince"
                    name="user_prince"
                    min
                />
                <User
                    src="http://static1.repo.aif.ru/1/b2/762139/fcbf24c503219775ad5a43aab46194e4.jpg"
                    alt="prince"
                    name="user_prince"
                    min
                />
                <User
                    src="http://static1.repo.aif.ru/1/b2/762139/fcbf24c503219775ad5a43aab46194e4.jpg"
                    alt="prince"
                    name="user_prince"
                    min
                /> 
            </div>
        </div>
    )
}