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

    renderUsers(arr) {
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

    renderMe(arr) {
        return arr.map((item) => {
            if (item.id === "1")
                return (
                    <div key={item.id}>
                        <User
                            src={item.photo}
                            alt={item.altname}
                            name={item.name}
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
    
        const items = this.renderUsers(users);
        const me = this.renderMe(users);

        return (
            <div className="right">
                {me}
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}