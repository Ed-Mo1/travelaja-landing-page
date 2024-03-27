import video from "../assets/Videos/pexels_videos_2257010 (2160p).mp4";

const Lazy = () => {
  return (
    <video
      src={video}
      type="video/mp4"
      autoPlay
      loop
      muted
      className="w-full z-[-1] h-full object-cover absolute top-0 left-0"
      decoding="async"
      loading="lazy"
    />
  );
};

export default Lazy;
