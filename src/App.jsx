import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Navbar from "./components/Navbar/Navbar.jsx";

import Hero from './components/Hero.jsx';
import Cards from './components/Cards/Cards.jsx';
import Footer from './components/Footer.jsx';
import TopBar from './components/TopBar.jsx';
import BannerHero from './components/BannerHero.jsx';
import Tarja from './components/Tarja.jsx';
import NotificationContainer from './components/Notification/NotificationContainer';

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
              <div className="app">
        <TopBar />
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="novidades">
          <BannerHero />
        </div>
        <Tarja />
        <div id="produtos">
          <Cards />
        </div>
        <div id="contato">
          <Footer />
        </div>
        <NotificationContainer />
      </div>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
