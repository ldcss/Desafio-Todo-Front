import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page from './components/Page';
import Form from './pages/Form/';
// import Edit from './pages/Edit';

function RoutesUrl() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          path={'/form'}
          element={
            <Page>
              <Form />
            </Page>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesUrl;
