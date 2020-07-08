export default function PostDescription() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="columns">
        <div className="column col-12 t">
          <p className="qname">Lorem ipsum dolor sit amet</p>
          <div className="hide-sm">
            <ul>
              <li className="cat">General</li>
            </ul>
          </div>
          <div className="show-sm">
            <ul>
              <li className="cat">General</li>
            </ul>
          </div>
          <hr className="divide" />
        </div>

        <div className="column col-12 con">
          <div className="columns gapless inner">
            <div className="col-6">
              <div className="go-left">
                <figure data-initial="S" className="avatar avatar-md" />
                <p className="username">Shreya Laheri</p>
              </div>
            </div>
            <div className="col-6">
              <div className="go-right">
                <button className="btn btn-action btn-sm edit">
                  <i className="icon  icon-edit" />
                </button>
                <p className="smalldate">14th May</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column col-12 det">
          <div className="qdetail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              elit
            </p>
            <div className="replyicon">
              <button className="btn btn-action r">
                {" "}
                <i className="material-icons r">reply</i>
              </button>
              <p className="replytext">Reply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
