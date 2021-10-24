import React, { useState } from "react";
import SearchBar from "../searchbar/SearchBar";
import "./NavbarLogged.css";
import AuthService from "../../services/auth";
import * as messages from "../../constants/messages";
import * as constants from "../../constants/constants";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useHistory } from "react-router";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Modal from "../modal/modal";

const NavbarLogged = (props) => {
  window.onclick = (event) => {
    console.log(event.srcElement);
    if (
      !(
        event.srcElement.className === "hamburger" ||
        event.srcElement.parentElement.className === "hamburger"
      ) &&
      document.getElementsByClassName("dropdown-container")[0].style.display ===
        "block"
    ) {
      console.log("Zatvori");
      document.getElementsByClassName("dropdown-container")[0].style.display =
        "none";
    }
  };

  function myfunc() {
    if (
      document.getElementsByClassName("dropdown-container")[0].style.display ===
      "block"
    ) {
      document.getElementsByClassName("dropdown-container")[0].style.display =
        "none";
    } else {
      var cont = document.getElementsByClassName("dropdown-container")[0];
      cont.style.display = "block";
    }
  }

  const [show, setShow] = useState(false);
  const history = useHistory();

  const odjava = () => {
    AuthService.logOut();
  };

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    hideProgressBar: true,
  };

  const submit = () => {
    confirmAlert({
      title: "Brisanje naloga",
      message: "Da li ste sigurni da želite obrisati nalog?",
      buttons: [
        {
          label: "Da",
          onClick: () => brisanjeNaloga(),
        },
        {
          label: "Ne",
          onClick: () => {},
        },
      ],
    });
  };

  const promjenaLozinke = async () => {
    setShow(true);
  };

  const brisanjeNaloga = async (event) => {
    try {
      await AuthService.deleteAccount();
      toast.info(messages.DELETE_ACCOUNT_SUCCESS);
      history.push("/pocetna");
      window.location.reload();
    } catch (error) {
      toast.error(
        error.response?.data ?? messages.DELETE_ACCOUNT_ERROR,
        toastConfig
      );
    }
  };

  const { korisnik: korisnik } = JSON.parse(
    localStorage.getItem(constants.ACCOUNT_KEY)
  );
  const { korisnicko_ime: korisnicko_ime, id: id } = korisnik;

  const MojStil = {
    stroke: "rgb(167, 163, 204)",
    fill: "rgb(100, 100, 100)",
    strokeWidth: 8,
    strokeDasharray: "none",
    strokeLinecap: "butt",
    strokeDashoffset: 0,
    strokeLinejoin: "miter",
    strokeMiterlimit: 4,
    fillRule: "nonzero",
    opacity: 1,
  };

  const close = () => {
    setShow(false);
  };

  return (
    <nav className="nav-container">
      <Modal show={show} handleClose={close}></Modal>
      <div className="navbar">
        <div className="logo-container">
          <svg
            version="1.1"
            height="100%"
            viewBox="0 0 303 217"
            xmlSpace="preserve"
          >
            <g transform="matrix(1.9 0 0 1 113.98 155)">
              <polygon style={MojStil} points="-50,-50 -50,50 50,50 50,-50 " />
            </g>
            <g transform="matrix(1.25 0 0 1.25 54 55)">
              <circle style={MojStil} cx="0" cy="0" r="40" />
            </g>
            <g transform="matrix(1.25 0 0 1.25 166 54)">
              <circle style={MojStil} cx="0" cy="0" r="40" />
            </g>
            <g transform="matrix(0 1.18 1.02 0 256.37 154.5)">
              <polygon style={MojStil} points="0,-42.5 50,42.5 -50,42.5 " />
            </g>
          </svg>
        </div>
        <div className="filler1"></div>
        <SearchBar updateData={props.updateData} />
        <div className="filler2"></div>
        <div className="link-container">
          <ul>
            <li>
              <a href="/pocetna">Početna</a>
            </li>
            <li>
              <a href="/sale">Sale</a>
            </li>
            <li>
              <a className="dropdown">
                <a>{korisnicko_ime}</a>
                <div className="dropdown-content">
                  <a href="#">Rezervacije</a>
                  <a onClick={promjenaLozinke}>Promjena lozinke</a>
                  <a onClick={submit}>Obriši nalog</a>
                </div>
              </a>
            </li>
            <li>
              <a href="/" onClick={odjava}>
                Odjava
              </a>
            </li>
          </ul>
          <button onClick={myfunc} class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="dropdown-container">
        <div>
          <a href="/pocetna">Početna</a>
        </div>
        <div>
          <a href="/sale">Sale</a>
        </div>
        <div>
          <a href="#">Rezervacije</a>
        </div>
        <div>
          <a onClick={promjenaLozinke}>Promjena lozinke</a>
        </div>
        <div>
          <a onClick={submit}>Obriši nalog</a>
        </div>
        <div>
          <a href="/" onClick={odjava}>
            Odjava
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogged;