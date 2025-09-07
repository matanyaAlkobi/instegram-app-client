import GetImage from "./GetImage.tsx";
import  "../styles/post.css"
export default function PostCreator() {
  return (
    <>
      <div className="post">
        <h3>matan</h3>
        <GetImage />
        <div>
          <p>♡ 2</p>
          <p>17:00</p>
        </div>
        <p>a nice car</p>
      </div>
    </>
  );
}
