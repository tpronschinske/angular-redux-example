import { ReduxStoreActions } from './actions';
import { tassign } from 'tassign';


// determines shape of the store and properties
export interface IAppState {
  counter: number;
  permissions?: {
    CanViewPage: boolean
  },
  lastUpdated: Date
}

export const InitialState: IAppState = {
  counter: 0,
  permissions: {
    CanViewPage: true
  },
  lastUpdated: null
}


export function rootReducer(state: IAppState, action): IAppState{
  switch (action.type){
    case ReduxStoreActions.Increment:
      return tassign(state, {
        counter: state.counter + 1,
        lastUpdated: new Date()
      });
  }

  return state;
}


