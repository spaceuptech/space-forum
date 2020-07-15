export default function PostDescription() {
  return (
    <div className="pagetwo">
      <br />
      <br />
      <br />
      <br />
      <div className="columns">
        <div className="column col-12 one">
          <p className="question-name">Lorem ipsum dolor sit amet</p>
          <div className="hide-sm">
            <ul>
              <li className="category-type">General</li>
            </ul>
          </div>
          <div className="show-sm">
            <ul>
              <li className="category-type">General</li>
            </ul>
          </div>
          <hr className="divide" />
        </div>

        <div className="column col-12 two">
          <div className="columns gapless">
            <div className="col-6">
              <div className="go-left">
                <figure
                  data-initial="S"
                  className="avatar avatar-md"
                  style={{ backgroundColor: "#00b65b" }}
                />
                <p className="username">Shreya Laheri</p>
              </div>
            </div>
            <div className="col-6">
              <div className="go-right">
                <button className="btn btn-action btn-sm edit">
                  <i className="icon icon-edit" />
                </button>
                <p className="smalldate">14th May</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column col-12 three">
          <div className="question-detail">
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
              <button className="btn btn-action ">
                {" "}
                <i className="material-icons">reply</i>
              </button>
              <p className="replytext">Reply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
