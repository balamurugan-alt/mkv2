import ReactPlayerLoader from "@brightcove/react-player-loader";

const onFailure = () => console.log("player error");
const onSuccess = () => console.log("player success");

const VideoPlayer = () => {
  return (
    <ReactPlayerLoader
      id="playlist-player-id"
      accountId="1752604059001"
      videoId="5819230967001"
      onFailure={onFailure}
      onSuccess={onSuccess}
      options={{
        responsive: true,
        autoplay: false,
        muted: false
      }}
    />
  );
};
export default VideoPlayer;
