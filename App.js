import React from "react";
import Navigation from "./src/navigation";
import { store } from './src/redux'
import { Provider } from 'react-redux'
import { Basket } from "./src/components";

const App = () => {
    return(
        <Provider store={store}>
            <Navigation/>
        </Provider>
    )
}

export default App;