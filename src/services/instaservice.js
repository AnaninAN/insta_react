export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3005/'
    }
    
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return res.json()
    }

    getAllPosts = async () => {
        const res = await this.getResource('posts/')
        
        return res
    }

    getAllUsers = async () => {
        const res = await this.getResource('posts/')
        
        return res.map((item) => {
            const {name, altname, photo, id} = item
            
            return {
                name,
                altname,
                photo,
                id
            }
        })
    }

    getAllPhotos = async () => {
        const res = await this.getResource('posts/')
        
        return res.map(this._transformPosts)
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }
}