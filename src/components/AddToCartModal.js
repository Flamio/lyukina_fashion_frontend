import { useDispatch, useSelector } from "react-redux";
import { ModalWindowActions } from "../actions";
import {Button, Modal} from "react-bootstrap";

export const AddToCartModal = () => {

  const addToCart = useSelector(s => s.modalWindow.addToCart);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(ModalWindowActions.addToCart(false));
  };

  return (
    <Modal show={addToCart} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>Товар добавлен в корзину</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="primary">Перейти в корзину</Button>
      </Modal.Footer>
    </Modal>
  );
}
