import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        try {
            this._isAuth = false
            this._user = {}
            this._id = 0;
            this._email = "";
            makeAutoObservable(this)
        } catch (error) {
            console.error('Ошибка при создании UserStore:', error)
        }
    }
    
    setIsEmail(_email) {
        this._email = _email
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setId(id) {
        this._id = id
    }

    get isemail() {
        return this._email
    } 
    get isID() {
        return this._id
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}