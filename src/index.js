import { createStore } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app"
import Counter from "./components/counter";
import reducer from "./reducer";
// import * as actions from "./actions";

const store = createStore(reducer);
// const { dispatch } = store;

// Example
// const mul = (payload) => ({type: "MUL", payload: payload});
// const mulDispatch = (payload) => store.dispatch(mul(payload));
// Example

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }
// const { inc, dec, rnd } =
//   bindActionCreators(actions, dispatch);

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch({type: "INC"});
// store.dispatch({type: "INC"});

// document.getElementById("mul").addEventListener("click", () => {
//   const payload = Math.floor(Math.random()*100);
//   mulDispatch(payload);
// });

// document.getElementById("inc").addEventListener("click", inc);

// document.getElementById("dec").addEventListener("click", dec);

// document.getElementById("rnd").addEventListener("click", () => {
//   const payload = Math.floor(Math.random()*10);
//   rnd(payload);
// });

// const update = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById("root"));
  // document.getElementById("counter").innerHTML = store.getState();
// };

// update();
// store.subscribe(update);
