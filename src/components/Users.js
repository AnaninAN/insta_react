import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (users) => {
        this.setState({
             users,
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
                <div key={item.id}>
                    <User
                        src={item.photo}
                        alt={item.altname}
                        name={item.name}
                        min
                    />
                </div>
            )
        });
    }

    render () {
        const {error, users} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(users);

        return (
            <div className="right">
                <User
                    src="https://images11.popmeh.ru/upload/img_cache/914/91427743b02f0a60c4ea86c69837b357_ce_1200x640x0x26_cropped_800x427.jpg"
                    alt="ananin_an"
                    name="ananin_an"
                />
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}