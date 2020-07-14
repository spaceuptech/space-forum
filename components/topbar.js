export default function TopBar() {
  return (
    <div className="topbar">
      <div className="columns">
        <div className="column col-12">
          <header className="navbar">
            <section className="navbar-section">
              <div className="padding">
                <img
                  src="/logo-black.svg"
                  className="logo"
                  alt="SpaceUpCloud"
                />
              </div>
            </section>

            <section className="navbar-section">
              <div className="hide-sm" style={{ marginRight: "40px" }}>
                <div className="company-name top">
                  <p className="copyrights">Powered by Space Cloud</p>
                  <img src="/spaceship.jpg" className="spaceship" alt="oops" />
                </div>
              </div>
              <div className="dropdown ">
                <a href="#" className="dropdown-toggle" tabIndex="0">
                  <figure className="avatar avatar-lg ">
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
          <div className="company-name">
            <p>Powered by Space Cloud</p>
            <img src="/spaceship.jpg" className="spaceship" alt="oops" />
          </div>
        </div>
      </div>
    </div>
  );
}
