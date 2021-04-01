import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import './App.css';
import Header from './layout/Header';
import PagesRoute from './routes/PagesRoute';
import store, { persistor } from "./store";
import theme from "./theme";

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <Header />
          <PagesRoute />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App;
