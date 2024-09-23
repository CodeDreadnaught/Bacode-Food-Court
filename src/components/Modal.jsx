import ReactDOM from "react-dom";
import { useEffect } from "react";

const ModalOverlay = props => {
  const clickHandler = event => {
    const clickedElement = event.target;

    if (
      clickedElement.classList.contains("overlay-backdrop") &&
      props.onShowModal
    ) {
      props.onShowModal(false);
    }
  };

  return (
    <div className="fixed w-screen h-screen z-10">
      <div
        className="overlay-backdrop size-full backdrop-blur-[3px] bg-[rgba(0,0,0,0.6)] center"
        onClick={clickHandler}
      >
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
        <ModalOverlay onShowModal={props.onShowModal}>
          {props.children}
        </ModalOverlay>,
        document.querySelector("#overlay-modal-root")
      )}
    </>
  );
};

export default Modal;
