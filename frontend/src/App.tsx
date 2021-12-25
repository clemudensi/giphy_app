import { VFC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Gifs } from 'pages';

const App: VFC = () => {
	return (
		<Provider store={store}>
			<Gifs />
		</Provider>
	);
}

export default App;
