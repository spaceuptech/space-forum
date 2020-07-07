
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Post() {
  const router= useRouter()
  const handleClick=(e)=>{
    router.push("/post-detail") 
    
  }
  return (
    <div>
      <div onClick={handleClick} className="columns gapless a">
        <div  className="column col-sm-12 col-7 ">
          <p className="q">
            Lorem ipsum dolor sit amet
          </p>
          <ul>
            <li className="cat">General</li>
          </ul>
         
        </div>
        <div className="column col-sm-12 col-5 ">
          <div className="columns gapless">
            <div className="col-sm-4 col-3 k">
              <figure
                className="avatar avatar-md"
                data-initial="S"
                style={{ backgroundColor: "#00b65b", margin: "3px" }}
              />
              <figure
                className="avatar avatar-md "
                data-initial="N"
                style={{
                  backgroundColor: "#f7cc1d",
                  margin: "3px",
                  marginLeft: "-27px",
                  zIndex: "-1",
                }}
              />
            </div>
            <div className="col-sm-4 col-3">
              <h3 className="num">4</h3>
              <p className="replies">replies</p>
            </div>
            <div className="col-3 hide-sm">
              <h3 className="views">100</h3>
              <p className="replies">views</p>
            </div>

            <div className="col-sm-4 col-3">
              <p className="created">created at</p>
              <h3 className="date">14th May</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}