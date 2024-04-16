import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import './index.css';

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../mui.theme.js";

import { Provider } from "react-redux";
import store from "./redux/store";

import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>,
);
