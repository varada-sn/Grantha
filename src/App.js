import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { DarkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import { Home } from './component/Home/Home';
import { Cart } from './component/Cart/Cart';
import { Search } from './component/Search/Search';
import { LoginForm } from './component/LoginSignup/LoginForm';
import { CustomerRouter } from './Routers/CustomerRouter';
import { Provider } from "react-redux";
import { store } from './component/State/store';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
    <CustomerRouter>
        <div>
          <Navbar/>
          <Home/>
        </div>
    </CustomerRouter>
    </Provider>
  );
}

export default App;
