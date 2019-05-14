import React from 'react';
import { Provider } from 'react-redux';
import HeaderComponent from './components/header';
import BodyComponent from './components/body';
import store from './store';
import showResult from './components/mailChimpFormSubmit';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <BodyComponent onSubmit={showResult}></BodyComponent>
      </div>
    </Provider>
  );
}

export default App;
