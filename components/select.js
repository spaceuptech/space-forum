export default function Select() {
  return (
    <div className="filter_panel">
      <br />
      <br />
      <br />
      <div className="columns">
        <div className="column col-xs-7 col-sm-8 col-md-6 col-lg-11">
          <div className="padding">
            <div className="has-icon-left">
              <input type="text" className="form-input" placeholder="Search" />
              <i className="form-icon icon icon-search"></i>
            </div>
          </div>
        </div>

        <div className="column col-xs-5 col-sm-4 col-md-6 col-lg-1">
          <div className="dropdown">
            <div className="btn-group">
              <a
                href="#"
                className="btn btn-primary hide-sm  dropdown-toggle"
                tabIndex="0"
              >
                Category
                <i className="icon icon-arrow-down" />
              </a>
              <ul className="menu">
                <a href="#">General</a>
              </ul>
            </div>
          </div>
          <button className="btn hide-sm">
            {" "}
            <i className="icon icon-plus one" />
            New Topic
          </button>
          <button className="btn btn-action show-sm one">
            <i className="icon icon-plus two"></i>
          </button>
          <button className="btn btn-action show-sm two">
            <div className="div top"></div>
            <div className="div mid"></div>
            <div className="div bottom"></div>
          </button>
        </div>
      </div>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </div>
  );
}
