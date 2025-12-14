import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Doctors from './pages/Doctors';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import ChatBot from './components/ChatBot';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'booking':
        return <Booking />;
      case 'doctors':
        return <Doctors onNavigate={setCurrentPage} />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      <div key={currentPage} className="animate-fade-in">
        {renderPage()}
      </div>
      <ChatBot />
    </Layout>
  );
};

export default App;