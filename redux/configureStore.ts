import { createStore, Store} from 'redux';
import { rootReducer, RootState } from './rootReducer';

export const configureStore = () => {
  return createStore(rootReducer as any) as Store<RootState>;
}