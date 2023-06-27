import {makeAutoObservable} from "mobx";

class UserStore {
    constructor(){
        this._isAuth = true;
        this._isUser = false;
        this._isDoc = true;
        this.userId = 1;
        this.docId = 1;
        this.appointmentList = [''];
        makeAutoObservable(this);
    }

    appointmentListSet(data){
        this.appointmentList = data;
    }

    get appointmentList_(){
        return this.appointmentList;
    }
    setUserId(id){
        this.userId = id;
    }
    
    setDocId(id){
        this.docId=id;
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
    get patId(){
        return this.userId;
    }
    
    setDoc(state){
        this._isDoc = state;
    }

    setUser(state) {
        this._isUser = state
    }

}

export default UserStore;