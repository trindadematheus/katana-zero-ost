<script lang="ts">
  import type { YoutubePlayerProps } from "src/types/youtube-player";
  import YoutubePlayer from "../components/YoutubePlayer.svelte";

  let videoPlayerControl: YoutubePlayerProps;
  let isVideoPlaying = false;
  let videoTitle = "";
  let videoAuthor = "";

  function handleVideoData(videoData) {
    videoTitle = videoData.detail.title;
    videoAuthor = videoData.detail.author;
  }

  function handlePlayPause() {
    if (!isVideoPlaying) {
      videoPlayerControl.playVideo();
      isVideoPlaying = true;
    } else {
      videoPlayerControl.pauseVideo();
      isVideoPlaying = false;
    }
  }
</script>

<div>
  <div class="video-player">
    <YoutubePlayer
      videoId="LAmeEPzmYNE"
      on:PlayerReady={handleVideoData}
      bind:player={videoPlayerControl}
    />
  </div>
  <main class="container">
    <img src="" alt="Music cover" class="music-image" />
    <!-- svelte-ignore a11y-distracting-elements -->
    <marquee>
      <h1 class="music-title">
        {videoTitle}
      </h1>
    </marquee>
    <h2 class="music-author">{videoAuthor}</h2>

    <div class="player">
      <p class="player-info">00:00</p>

      <div class="player-actions">
        <button class="player-action">{"<"}</button>
        <button on:click={handlePlayPause} class="player-playpause"
          >{isVideoPlaying ? "||" : ">"}</button
        >
        <button class="player-action">{">"}</button>
      </div>

      <p class="player-info">02:20</p>
    </div>

    <div class="divider" />
  </main>
</div>

<style>
  .video-player {
    display: none;
  }

  .container {
    height: 100vh;
    width: 290px;
    margin: 0 auto;
    padding: 20px;
  }

  .music-image {
    background-color: red;
    height: 250px;
    width: 250px;
    margin-bottom: 20px;
  }

  .music-title {
    font-size: 16px;
    color: #fff;
    text-shadow: 0 0 6px #fff;
    text-transform: uppercase;
  }

  .music-author {
    color: #777;
    text-shadow: 0 0 6px #777;
    font-size: 12px;
    margin-top: 10px;
  }

  .divider {
    background-color: #111;
    height: 1px;
    margin: 20px 0px;
  }

  .player {
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .player-info {
    color: #777;
    text-shadow: 0px 0px 6px #777;
    font-size: 8px;
    margin-top: 10px;
  }

  .player-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .player-action {
    background-color: white;
    box-shadow: 0px 0px 6px white;
    height: 30px;
    width: 30px;
  }

  .player-playpause {
    background-color: #5af3f3;
    box-shadow: 0px 0px 6px #5af3f3;
    height: 40px;
    width: 40px;
  }
</style>
