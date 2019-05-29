import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import Loading from './Loading';

export default class Palette extends Component {
    InstaService = new InstaService()
    state = {
        photos: [],
        error: false,
        load: true
    }
    
    componentDidMount() {
        this.updatePhotos()
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError)
    }

    onPhotosLoaded = (photos) => {
         this.setState({
             photos,
             error: false,
             load: false
         })
    }

    onError = (err) => {
        this.setState({
            error: true,
            load: false
        })
    }

    renderItems(arr) {
        return arr.map((item) => {

            return (
                <img src={item.src} alt={item.alt} key={item.id}></img>                
            )
        })
    }

    render() {
        const {error, photos, load} = this.state
        if (error) {
            return <ErrorMessage/>
        }
        if (load) {
            return <Loading/>
        }

        const items = this.renderItems(photos)

        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}