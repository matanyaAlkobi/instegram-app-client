import GetImage from "./GetImage.tsx";
import  "../styles/post.css"
export default function PostCreator() {
  return (
    <>
      <div className="post">
        <h3>matan</h3>
        <GetImage />
        <div  className="time-and-like">
          <p className="like">♡ 2</p>
          <p className="time">17:00</p>
        </div>
        <p>a nice car</p>
      </div>
    </>
  );
}
