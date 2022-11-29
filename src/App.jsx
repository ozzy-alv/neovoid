import React, { useState } from 'react';
import { Navbar, About, Service, Footer, Contact, Hero } from './components';
import styles from './style';
import './App.css';

const App = () => {
  return (
    <div className="bg-inherit w-full overflow-hidden">
      <div className={``}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-[#F6FFF8] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-inherit ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About /> <Service /> <Contact /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
