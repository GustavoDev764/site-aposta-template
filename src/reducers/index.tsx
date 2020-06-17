import { combineReducers } from "redux";

//import reducers
import UserReducer from "./User";
import LtJogosReducer from "./ListaDeJogos";
import LtApostaReducer from "./ListaDeAposta";
import ListSportRC from "./ListSport";
import TravasReducer from "./Travas";

export default combineReducers({
  UserReducer,
  LtJogosReducer,
  LtApostaReducer,
  ListSportRC,
  TravasReducer,
});
