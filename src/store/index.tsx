import { createStore, Store, compose } from "redux";
import reducers from "../reducers";

//import reducers
import { UserState } from "../reducers/User/types";
import { LtJogosState } from "../reducers/ListaDeJogos/types";
import { LtApostaState } from "../reducers/ListaDeAposta/types";
import { ListSportState } from "../reducers/ListSport/types";
import { TravasState } from "../reducers/Travas/types";

export interface ApplicationState {
  UserReducer: UserState;
  LtJogosReducer: LtJogosState;
  LtApostaReducer: LtApostaState;
  ListSportRC: ListSportState;
  TravasReducer: TravasState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(
  reducers,
  composeEnhancers()
);

export default store;
