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
import SideBar from "./SideBar/SideBar";


function App() {
  const [ showMenu, setShowMenu ] = useState(false);
  const [ showPopup, setShowPopup ] = useState(false);
  const [ titleTransport, setTitleTransport ] = useState('');
  const [ idTransport, setIdTransport ] = useState('');

  const handleShow = (id, title) => {
      setShowPopup(true);
      setIdTransport(id);
      setTitleTransport(title);
  }
  const openBurgerMenu = () => {
      setShowMenu(true);
  }

  return (
      <>
        {
          (showMenu) ? <SideBar closeSideBar={ () => setShowMenu(false) } /> : ""
        }
        <Header openBurgerMenu={openBurgerMenu}/>
        <div className="App">
            { showPopup && <Popup idTranport={ idTransport }
                                  titleTransport={titleTransport}
                                  handleClose = { () => setShowPopup(false) } />}
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
