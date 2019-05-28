import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
         this.setState({
             posts,
             error: false
         });
    }

    onError = (err) => {
        this.setState({
            error: true
        });
    }

    renderItems(arr) {
        return arr.map((item) => {

            return (
                <div key={item.id} className="post">
                    <User
                        src={item.photo}
                        alt={item.altname}
                        name={item.name}
                        min
                    />
                    <img src={item.src} alt={item.alt}></img>
                    <div className="post__name">
                        {item.name}
                    </div>
                    <div className="post__descr">
                        {item.descr}
                    </div>
                </div>
            )
        });
    }
    
    render() {
        const {error, posts} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);

        return (
            <div className="left">
                {items}
            </div>
        )
    }
}