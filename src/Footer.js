export default function Footer () {

  return(<section className="footer-section">
    <div className="container">
      <div className="footer-logo text-center">
        <a href="/"><img src="/img/logo.png" alt=""/></a>
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
  </section>)
}