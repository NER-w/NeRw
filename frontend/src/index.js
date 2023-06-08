import React, {createContext} from 'react';
import UserStore from './store/user_store';
import ReactDom from 'react-dom';
import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));
export const Context = createContext(null);

root.render(
  <Context.Provider value={{
    UserStore: new UserStore()
}}>
      <App/>
  </Context.Provider>
);

