import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import PublicLayout from "./layouts/Site.layout"

import GlobalStyles from "./styles/global"

import AppProvider from './hooks'


import Routes from "./routes"

const App = () => (
  <>
    <BrowserRouter>
      <PublicLayout>
        <AppProvider>
          <Routes />
        </AppProvider>
      </PublicLayout>

      <GlobalStyles />
    </BrowserRouter>
  </>
)

export default App;
