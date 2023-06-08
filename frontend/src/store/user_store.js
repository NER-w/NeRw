import {makeAutoObservable} from "mobx";

class UserStore {
    constructor(){
        this._isAuth = true;
        this._isUser = false;
        makeAutoObservable(this);
    }
    get isAuth(){
        return this._isAuth;
    }
    get isUser(){
        return this._isAuth;
    }
}

export default UserStore;