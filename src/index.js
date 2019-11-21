import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movies from './Containers/Movies';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Movies />, document.getElementById('root'));
registerServiceWorker();
