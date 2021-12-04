import React, { useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import reactDom from "react-dom";

export const Context = React.createContext();

function App() {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showModal = () => {
    setIsShowingModal(true);
  };
  const closeModal = () => {
    setIsShowingModal(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <Context.Provider
      value={{
        isShowingModal,
        showModal,
        closeModal,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      <Home />
      <Modal />:
      <Sidebar />
    </Context.Provider>
  );
}

export default App;
