import {makeAutoObservable} from "mobx";

class UserStore {
    constructor(){
        this._isAuth = false;
        makeAutoObservable(this);
    }
    get isAuth(){
        return this._isAuth;
    }
}

export default UserStore;