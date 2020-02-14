import { rootReducer, RootState } from './rootReducer';
import { Store, createStore } from 'redux';

export function configureStore(initialState?: RootState): Store<RootState> {

  const store = createStore(rootReducer as any, initialState as any) as Store<
    RootState
  >;

  return store;
}
