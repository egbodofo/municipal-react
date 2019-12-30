import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';

const Home = React.lazy(() => {
  return import('./components/Home/Home');
});

const Gallery = React.lazy(() => {
  return import('./containers/AboutUs/Gallery/Gallery');
});

const Executives = React.lazy(() => {
  return import('./containers/Government/Executives/Executives');
});

const History = React.lazy(() => {
  return import('./containers/AboutUs/HistoryMaps/History');
});

const GalleryShow = React.lazy(() => {
  return import('./containers/AboutUs/Gallery/GalleryShow');
});

const ExecutiveShow = React.lazy(() => {
  return import('./containers/Government/Executives/ExecutiveShow');
});

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/gallery" exact render={props => <Gallery {...props} />} />
      <Route path="/history" exact render={props => <History {...props} />} />
      <Route
        path="/galleryshow"
        exact
        render={props => <GalleryShow {...props} />}
      />
      <Route
        path="/executiveshow"
        exact
        render={props => <ExecutiveShow {...props} />}
      />
      <Route
        path="/executives"
        exact
        render={props => <Executives {...props} />}
      />
    </Switch>
  );

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Spinner />}>{routes}</Suspense>
      <Footer />
    </div>
  );
}

export default App;
