export default function TopBar() {
  return (
    <div>
      <div className="columns">
        <div className="column col-12">
          <header className="navbar a">
            <section className="navbar-section">
              <div className="padding">
                <img
                  style={{ marginTop: "5px", marginBottom: "5px" }}
                  src="/logo-black.svg"
                  className="logo"
                  alt="SpaceUpCloud"
                />
              </div>
            </section>

            <section className="navbar-section">
              <div className="hide-sm" style={{ marginRight: "40px" }}>
                <div className="company top">
                  <p className="copyrights">Powered by Space Cloud</p>
                  <img src="/spaceship.jpg" className="spaceship" alt="oops" />
                </div>
              </div>
              <div className="dropdown ">
                <a href="#" className="dropdown-toggle" tabIndex="0">
                  <figure className="avatar avatar-lg a">
                    <i className="material-icons">perm_identity</i>
                  </figure>
                </a>
                <div className="menu left">
                  <ul>
                    <a href="#">Logout</a>
                  </ul>
                </div>
              </div>
            </section>
          </header>
        </div>
        <div className="column col-12 footer show-xs">
          <div className="company">
            <p>Powered by Space Cloud</p>
            <img src="/spaceship.jpg" className="spaceship" alt="oops" />
          </div>
        </div>
      </div>
    </div>
  );
}
