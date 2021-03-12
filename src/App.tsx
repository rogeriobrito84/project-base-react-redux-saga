import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import './App.css';
import Header from './layout/Header';
import PagesRoute from './routes/PagesRoute';
import store, { persistor } from "./store";

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <PagesRoute />
      </PersistGate>
    </Provider>
  )
}

export default App;
