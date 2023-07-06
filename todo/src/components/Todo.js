import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  // 삭제버튼
  function handleDelete() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {showModal ? (
        <Modal onCancel={handleCloseModal} onConfirm={handleCloseModal} />
      ) : null}
      {showModal ? <Backdrop onCancel={handleCloseModal} /> : null}
    </div>
  );
}
export default Todo;
