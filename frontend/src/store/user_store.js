import {makeAutoObservable} from "mobx";

class UserStore {
    constructor(){
        this._isAuth = false;
        this._isUser = false;
        this._isDoc = false;
        makeAutoObservable(this);
    }
    get isAuth(){
        return this._isAuth;
    }
    get isUser(){
        return this._isAuth;
    }

    get isDoc() {
        return this._isDoc;
    }

    setDoc(state){
        this._isDoc = state;
    }

    setUser(state) {
        this._isUser = state
    }

}

export default UserStore;