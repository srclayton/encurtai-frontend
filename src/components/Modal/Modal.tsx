import Modal from "react-modal";
import "./Modal.css";
Modal.setAppElement("#root");
type TModalProps = {
  children: React.ReactNode;
  modalIsOpenHandler: (modalIsOpen: boolean) => void;
  shortenedUrlHandler: (shortenedUrl: string | null) => void;
  modalIsOpen: boolean;
};
export default function ModalComponent(props: TModalProps) {
  const { modalIsOpenHandler, modalIsOpen, shortenedUrlHandler } = props;

  function closeModal() {
    modalIsOpenHandler(false);
    shortenedUrlHandler(null);
  }

  const customStyles = {
    overlay: {
      background: "rgba(255, 255, 255, 0.06)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "30%",
      background: "rgba(255, 255, 255, 0.06)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.30)",
      backdropFilter: "blur(3.1px)",
      border: "1px solid rgba(255, 255, 255, 0.61)",
    },
  };
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {props.children}
      </Modal>
    </div>
  );
}
