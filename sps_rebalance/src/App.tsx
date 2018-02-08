import * as React from 'react';
import AllocationTableContainer from './components/AllocationTableContainer';
const { Provider } = require('react-redux');
import configureStore from './reducers';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <div className="no-padding">
                <AllocationTableContainer />
            </div>
        </Provider>
    );
  }
}

export default App;
