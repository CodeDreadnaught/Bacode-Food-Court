import ReactDOM from "react-dom";
import { useEffect } from "react";

const ModalOverlay = props => {
  return (
    <div className="fixed w-screen h-screen z-10">
      <div className="size-full backdrop-blur-[3px] bg-[rgba(0,0,0,0.6)] center">
        {props.children}
      </div>
    </div>
  );
};

const Modal = props => {
  useEffect(() => {
    document.body.classList.add("prevent-scrolling");

    return () => {
      document.body.classList.remove("prevent-scrolling");
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.querySelector("#overlay-modal-root")
      )}
    </>
  );
};

export default Modal;
