import React, { useState } from "react";

import './App.css';

import Header from "./Header";
import Conditions from "./Сonditions/Сonditions";
import WhyUs from "./WhyUs/WhyUs";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Transports from "./Transports/Transports";
import Popup from "../components/Popup/Popup";
import Title from "./Title/Title";
import Detail from "./Detail/Detail";


function App() {
  const [ showPopup, setShowPopup ] = useState(false);

  const handleShow = () => {
      setShowPopup(true);
  }

  return (
      <>
        <Header />
        <div className="App">
            { showPopup && <Popup handleClose = { () => setShowPopup(false) } />}
            <Transports handleShow={ handleShow }/>
            <Conditions />
            <WhyUs />
            <Title title={"Контакты"} />
            <Contacts />
            <Detail />
            <Footer />
        </div>
      </>
  );
}

export default App;
