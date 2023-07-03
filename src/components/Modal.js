function Modal(props) {
  // 래퍼함수 활용
  function handleCancel() {
    props.onCancel();
  }

  function handleConfirm() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Aref you sure?</p>
      <button className="btn btn--alt" onClick={handleCancel}>
        Cancel
      </button>
      <button className="btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
