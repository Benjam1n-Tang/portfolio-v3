import screenCoding from "../../../videos/screen_coding.mp4";
import handsWorking from "../../../videos/hands_working.mp4";
import handsKeyboard from "../../../videos/hands_working.mp4";
import Video from "next-video";

const VideoBackground = () => {
  return (
    <>
      <Video
        src={handsWorking}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
      />
    </>
  );
};

export default VideoBackground;
