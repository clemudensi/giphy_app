import { VFC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Gifs } from 'pages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App: VFC = () => {
	return (
		<Provider store={store}>
			<Gifs />
		</Provider>
	);
}

export default App;
