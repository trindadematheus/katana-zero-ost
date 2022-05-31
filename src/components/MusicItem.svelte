<script lang="ts">
  import type { Music } from "../types/music";

  export let music: Music;
</script>

<div class="music-item">
  <img src="" alt="Music cover" />

  <div class="music-info">
    <h2 class="music-title">{music.title}</h2>
    <h4 class="music-author">{music.author}</h4>
  </div>
</div>

<style>
  .music-item {
    margin-top: 14px;
    cursor: pointer;
    transition: all 400ms;

    display: flex;
    align-items: center;
  }

  .music-item:hover {
    transform: translateX(8px);
  }

  img {
    background-color: red;
    height: 36px;
    width: 36px;
  }

  .music-info {
    margin-left: 8px;

    display: flex;
    flex-direction: column;
  }

  .music-title {
    font-size: 12px;
    color: white;
  }

  .music-author {
    margin-top: 4px;
    font-size: 8px;
    color: white;
  }
</style>
