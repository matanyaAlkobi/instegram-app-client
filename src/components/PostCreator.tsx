import GetImage from "./Getimage";
import GetImageDescription from "./GetImageDescription";
import GetLikes from "./GetLikes";
import GetTimeAndHour from "./GetTimeAndHour";
import GetUsername from "./GetUsername";

export default function PostCreator() {
  return (
    <>
      <div className="post">
        <GetUsername />
        <GetImage />
        <div>
          <GetLikes />
          <GetTimeAndHour />
        </div>
        <GetImageDescription />
      </div>
    </>
  );
}
