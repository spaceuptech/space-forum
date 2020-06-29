
import MyEditor from "./markdown";

export default function AddReply() {
  return (
    <div>
      <div className="columns">
        <div className="column col-12 con">
          <div className="columns gapless inner">
            <div className="col-6">
              <div className="go-left">
                <figure data-initial="S" className="avatar avatar-md" />
                <p className="username">Shreya Laheri</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column col-12 det">
          <div className="qdetail">
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