import { VFC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

const App: VFC = () => {
  return (
    <Provider store={store}>
      <div />
    </Provider>
  );
}

export default App;
