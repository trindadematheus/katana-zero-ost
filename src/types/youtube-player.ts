export type YoutubePlayerProps = {
  playVideo(): void;
  pauseVideo(): void;
  getVideoData(): {
    author: string;
    title: string;
  };
  playerInfo: any;
};
