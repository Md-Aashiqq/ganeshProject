import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { initialState } from './Reducer';
import { reducer } from './Reducer';
import { DataLayer } from './Datalayer';
const App = () => {
  const routing = useRoutes(routes);

  return (
    <DataLayer initialstate={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </DataLayer>
  );
};

export default App;
