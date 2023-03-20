import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider} from 'react-redux';
import Counter from './Counter';
import { store } from './store/rootReducer';

function App() {

  return (
    <div className="App">
    <Provider store={store}>
        <Counter/>
    </Provider>
    </div>
  );
}

export default App;
