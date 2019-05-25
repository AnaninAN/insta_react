import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="http://static1.repo.aif.ru/1/b2/762139/fcbf24c503219775ad5a43aab46194e4.jpg"
                    alt="prince"
                    name="user_prince"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Cupidatat fugiat nisi consequat aliquip labore id fugiat nulla dolor elit veniam. Pariatur adipisicing sint ea anim voluptate Lorem nostrud.
                </div>
            </div>
        )
    }
}