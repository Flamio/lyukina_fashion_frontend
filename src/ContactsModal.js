import {Button, Modal} from "react-bootstrap";
import {GeoObject, Map, YMaps} from "react-yandex-maps";
import {useDispatch, useSelector} from "react-redux";
import {ModalWindowActions} from "./actions";

export default function ContactsModal() {

  const contactsView = useSelector(state => state.modalWindow.contacts)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(ModalWindowActions.contacts(false))
  }


  return (<Modal show={contactsView} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>Контакты</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="row">
        <div className="col-6">
          Телефон:
        </div>
        <div className="col-6">
          8 (964) 181-75-67
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          Адрес:
        </div>
        <div className="col-6">
          г. Ижевск, ул Пушкина, д. Колотушкина, 157
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <YMaps query={{mode: "release"}}>
            <Map width="100%" defaultState={{
              autoFitToViewport: "always",
              center: [56.848623, 53.215310],
              zoom: 18
            }}>
              <GeoObject geometry={{
                type: "Point",
                coordinates: [56.848652, 53.215279]
              }}/>
            </Map>
          </YMaps>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Закрыть
      </Button>
    </Modal.Footer>
  </Modal>)
}