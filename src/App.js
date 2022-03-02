import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import IpComponent from './components/Ip';
import Usercomponent from './components/User';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IpComponent />
        <Usercomponent />
      </div>
    </Provider>
  );
}

export default App;
