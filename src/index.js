import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

// Creates a Navigation Service
// objective: to use react-navigation elsewhere in the App.
import { setNavigator } from './services/navigation';
//

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
