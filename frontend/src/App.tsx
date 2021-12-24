import { VFC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Gifs } from 'pages/gifs';

const App: VFC = () => {
  return (
    <Provider store={store}>
      <Gifs />
    </Provider>
  );
}

export default App;
