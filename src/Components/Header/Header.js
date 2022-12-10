import React from "react";
import "./Header.css";
import avatar from "../../asset/images/avatarGreen.png";
import Slider from "../Carousel/Carousel";

const Header = () => {
  return (
    <section id="headerContainer">
      <section id="avatarContainer">
        <div className="avatarPicture">
          <img id="avatar" src={avatar} alt="Mon avatar" />
          <section className="avatarText">
            <div className="taskTerminal">
              <i className="fa-solid fa-xmark closeBtn"></i>
              <i className="fa-solid fa-minus minimizeBtn"></i>
              <i className="fa-solid fa-up-right-and-down-left-from-center fullscreenBtn"></i>
              <p>
                <i className="fa-regular fa-folder folderBtn"></i>
                @Dagan's-Portfolio
              </p>
            </div>
            <section>
              <div className="textTerminal">
                <p>Last login: Wed Dec 7 09:38:46 on ttys000</p>
                <p>ios@macbook-pro-dagan ~ % .... 👋 Hello World</p>
                <p>ios@macbook-pro-dagan ~ % .... 🤓 Compiled successfuly !</p>
              </div>
            </section>
            <section>
              <div className="introTerminal">
                <p>Welcome on My Portfolio 💾</p>
                <a
                  className="source_code"
                  href="https://github.com/Daganx/Portfolio"
                  rel="external"
                >
                  <i className="fa-solid fa-code"></i>
                  Source code
                </a>
              </div>
            </section>
          </section>
        </div>
      </section>
      <section id="languageContainer">
        <Slider />
      </section>
    </section>
  );
};

export default Header;
