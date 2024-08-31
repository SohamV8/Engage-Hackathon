import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sponsors from './Components/Sponsors';
import Tracks from './Components/Tracks';
import About from './Components/About';
import './App.css'; // Assuming you have global styles here

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="Tracks">
          <Tracks />
        </section>
        <section id="Sponsors">
          <Sponsors />
        </section>
        <section id="FAQ">
          {/* FAQ section content can be added here */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
