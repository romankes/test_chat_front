import {configureStore} from '@reduxjs/toolkit';

import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

import sagaMiddleware from './middleware/saga';

const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: createRootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);
