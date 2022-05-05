import { useDispatch, useSelector } from "react-redux";
import { ModalWindowActions } from "../../actions";
import { Button, Modal } from "react-bootstrap";
import { CartActions } from "../../actions";

export const RemoveFromCartModal = () => {
  const removeFromCart = useSelector((s) => s.modalWindow.removeFromCart);
  const dispatch = useDispatch();

  return (
    <Modal
      show={removeFromCart.show}
      onHide={() => dispatch(ModalWindowActions.removeFromCart(false))}
    >
      <Modal.Header>
        <Modal.Title>Удаление из корзины</Modal.Title>
      </Modal.Header>
      <Modal.Body>Удалить товар из корзины?</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch(ModalWindowActions.removeFromCart(false))}
        >
          Нет
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(
              CartActions.removeProduct(
                removeFromCart.id,
                removeFromCart.sizeId
              )
            );
            dispatch(ModalWindowActions.removeFromCart(false));
          }}
        >
          Да
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
