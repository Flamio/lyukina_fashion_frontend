import { useDispatch, useSelector } from "react-redux";
import { CartActions, ModalWindowActions } from "../../actions";
import { Button, Modal } from "react-bootstrap";
import { Toggler } from "../Toggler";

import "./ProductSettingsModal.css";
import { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";

export const ProductSettingsModal = () => {
  const productSettings = useSelector((s) => s.modalWindow.productSettings);
  const dispatch = useDispatch();

  const [sizes, setSizes] = useState([{name: "..."}])
  const [size, setSize] = useState(1)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {   
      if (!productSettings.id) {
          return
      }
      ProductService.getSizes(productSettings.id)
        .then((t) => {          
            setSizes(t);
        })
  }, [productSettings.id])

  const closeHandler = (event) => {
      dispatch(ModalWindowActions.productSettings(false))
      event.preventDefault();
  }

  const okHandler = (event) => {
    dispatch(ModalWindowActions.productSettings(false));
    dispatch(CartActions.putProduct({id: productSettings.id, quantity, size: sizes[size-1].id }))
    event.preventDefault();
}

  return (
    <Modal
      show={productSettings.show}
      onHide={() => {          
        dispatch(ModalWindowActions.productSettings(false));
      }}
    >
      <Modal.Header>
        <Modal.Title>Параметры</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Toggler onChange={(value) => {setQuantity(value)}} text={"Количество"} numeric />
        <Toggler onChange={(value) => {setSize(value)}} text={"Размер"} data={sizes.map(s => s.name)} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeHandler}>Закрыть</Button>
        <Button variant="primary" onClick={okHandler}>ОК</Button>
      </Modal.Footer>
    </Modal>
  );
};
