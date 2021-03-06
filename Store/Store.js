import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';

const reducerPrueba =  (state=[0], action) =>{
    switch(action.type){
        case 'AUMENTAR_REDUCER_PRUEBA':
          return [ ...state, 1];
        default:
          return state;
    }
};

const SagaMiddleware = createSagaMiddleware();


const reducers = combineReducers({
     reducerPrueba,
     form,  
});

const store = createStore(reducers, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(functionPrimaria);

export default store;