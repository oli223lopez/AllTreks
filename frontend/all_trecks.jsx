import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContent", () => {
    const root = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<Root store={store}/>, root)
})

