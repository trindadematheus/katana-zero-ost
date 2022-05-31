<script lang="ts">
  import MusicItem from "../components/MusicItem.svelte";
  import type { YoutubePlayerProps } from "../types/youtube-player";
  import YoutubePlayer from "../components/YoutubePlayer.svelte";
  import { playlist } from "../constants/playlist";

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

  function handlePlayMusic(data) {
    videoPlayerControl.loadVideoById(data.detail.videoId);
    handleVideoData(data);
    isVideoPlaying = true;
  }
</script>

<div class="body">
  <div class="video-player">
    <!-- todo: transform to global -->
    <YoutubePlayer
      videoId={playlist[0].videoId}
      bind:player={videoPlayerControl}
      on:PlayerReady={handleVideoData}
    />
  </div>

  <main class="container">
    <img src="/cover.jpg" alt="Music cover" class="music-image" />
    <!-- svelte-ignore a11y-distracting-elements -->
    <marquee>
      <h1 class="music-title">
        {videoTitle}
      </h1>
    </marquee>
    <h2 class="music-author">{videoAuthor}</h2>

    <div class="player">
      <p class="player-info">--:--</p>

      <div class="player-actions">
        <button class="player-action">{"<"}</button>
        <button on:click={handlePlayPause} class="player-playpause"
          >{isVideoPlaying ? "||" : ">"}</button
        >
        <button class="player-action">{">"}</button>
      </div>

      <p class="player-info">--:--</p>
    </div>

    <div class="divider" />

    <div class="music-list">
      {#each playlist as music}
        <MusicItem on:SelectMusic={handlePlayMusic} {music} />
      {/each}
    </div>
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
    padding-bottom: 0px;

    display: flex;
    flex-direction: column;
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

  .music-list {
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
  }

  .music-list::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  .music-list::-webkit-scrollbar-track {
    background: #111;
  }

  /* Handle */
  .music-list::-webkit-scrollbar-thumb {
    background: #333;
  }

  /* Handle on hover */
  .music-list::-webkit-scrollbar-thumb:hover {
    background: #222;
  }
</style>
