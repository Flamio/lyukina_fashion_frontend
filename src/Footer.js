import React from "react";
import {Button, Modal} from "react-bootstrap";
import {Map, YMaps} from "react-yandex-maps";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addressView: false
    }

  }

  handleClose() {
    this.setState({addressView: false})
  }

  render() {
    return (<section className="footer-section">
      <div className="container">
        <div className="footer-logo text-center">
          <a href="index.html"><img src="img/logo.png" alt=""/></a>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <div className="footer-widget about-widget">
              <h2>О нас</h2>
              <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue
                mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis
                ut. Integer ac sem.</p>
            </div>
          </div>
          <div className="col-lg-9 col-sm-12">
            <div className="footer-widget about-widget pull-right">
              <ul>
                <li><a href="#" onClick={() => {
                  this.setState({addressView: true});
                  return false
                }}>Контакты</a></li>
                <li><a href="">Возврат</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links-warp">
        <div className="container">
          <div className="social-links">
            <a href="" className="instagram"><i
                className="fa fa-instagram"/><span>instagram</span></a>
          </div>
          <p className="text-white text-center mt-5">Copyright &copy;
            <script>document.write(new Date().getFullYear());</script>
            All rights reserved
          </p>
        </div>
      </div>

      <Modal show={this.state.addressView} onHide={() => {
        this.setState({addressView: false});
        return false
      }}>
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
              <YMaps>
                <Map defaultState={{center: [56.848623, 53.215310], zoom: 18}}/>
              </YMaps>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            this.setState({addressView: false});
            return false
          }}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </section>)
  }
}