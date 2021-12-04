import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Context } from "./App";

const Home = () => {
  const { showModal, openSidebar } = useContext(Context);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={showModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
