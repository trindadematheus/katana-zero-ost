<script lang="ts">
  import { playlist } from "../constants/playlist";
  import TrackList from "../components/Track.svelte";
  import YoutubePlayer from "./YoutubePlayer.svelte";
  import type { YoutubePlayerProps } from "../types/youtube-player";

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

<section id="track-list">
  <div class="container">
    {#each playlist as music}
      <TrackList on:SelectMusic={handlePlayMusic} {music} />
    {/each}
  </div>

  <div class="video-player">
    <!-- todo: transform to global -->
    <YoutubePlayer
      videoId={playlist[0].videoId}
      bind:player={videoPlayerControl}
      on:PlayerReady={handleVideoData}
    />
  </div>
</section>

<style>
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .video-player {
    display: none;
  }
</style>
