export type YoutubePlayerProps = {
  playVideo(): void;
  pauseVideo(): void;
  loadVideoById(videoId: string): void;
  getVideoData(): {
    author: string;
    title: string;
  };
  playerInfo: any;
};
