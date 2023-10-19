import React, { useState } from "react";

import './App.css';

import Header from "./Header";
import WhyUs from "./WhyUs/WhyUs";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Transports from "./Transports/Transports";
import Popup from "../components/Popup/Popup";
import Title from "./Title/Title";
import Detail from "./Detail/Detail";
import Team from "./Team/Team";


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
            <Title title={"Транспорт"} />
            <Transports handleShow={ handleShow }/>
            <Title title={"Почему мы"} />
        </div>
        <div className="App-right">
          <WhyUs />
        </div>
        <div className="App">
            <Title title={"Руководство"} />
            <Team />
            <Title title={"Контакты"} />
            <Contacts />
            <Detail />
            <Footer />
        </div>
      </>
  );
}

export default App;
