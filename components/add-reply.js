import MyEditor from "./markdown";

export default function AddReply() {
  return (
    <div className="pagetwo">
      <div className="columns">
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
          </div>
        </div>

        <div className="column col-12 three">
          <div className="question-detail">
            <div>
              <MyEditor />
            </div>

            <div className="replyicon">
              <button className="btn btn-primary cancel">Cancel</button>

              <button className="btn reply">Reply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
