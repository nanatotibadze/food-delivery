import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import reactDom from "react-dom";

const portalElement = document.getElementById("overlays");

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onHideCart={props.onHideCart}></Backdrop>,
        portalElement
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
