import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducer';


const store = createStore( rootReducer );
export default store;

export const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useSelector;
