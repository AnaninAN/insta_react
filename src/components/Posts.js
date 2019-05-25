import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <Post alt="nature" src="http://images.france.fr/zeaejvyq9bhj/4VGVbWT4kwsIyqaIuyiYs2/69b40a00fddb2b2c26ebd472fa6e4186/nature_dordogne.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill"/>
            </div>
        )
    }
}