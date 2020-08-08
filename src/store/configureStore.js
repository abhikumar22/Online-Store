import { createStore } from 'redux'
import reducer from './reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

// function configureStore() {
    const configureStore=  createStore(reducer,

        devToolsEnhancer({ trace: true })

    );
// }


export default configureStore;