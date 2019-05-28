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
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onUsersLoaded = (users) => {
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
        return (
            <User
                src="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg"
                alt="Man"
                name="some_cool_man"
            />
        );
    }

    render () {
        const {error, users} = this.state;
        if (error) {
            return <ErrorMessage/>
        }
    
        const me = this.renderMe(users);
        const items = this.renderUsers(users);

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