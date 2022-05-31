<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { currentMusic } from "../store";
  import type { Music } from "../types/music";

  const dispatch = createEventDispatcher();

  export let music: Music;
  $: isCurrentMusic = $currentMusic === music.videoId;

  function handleClick() {
    $currentMusic = music.videoId;
    dispatch("SelectMusic", music);
  }
</script>

<div on:click={handleClick} class="music-item">
  <img
    class={isCurrentMusic && "active-img"}
    src="/cover.jpg"
    alt="Music cover"
  />

  <div class="music-info">
    <h2 class="music-title {isCurrentMusic && 'active-text'}">
      {music.title}
    </h2>
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
    height: 36px;
    width: 36px;
  }

  .active-img {
    filter: grayscale(100%);
  }

  .music-info {
    margin-left: 8px;

    display: flex;
    flex-direction: column;
  }

  .music-title {
    font-size: 12px;
    color: white;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .music-author {
    margin-top: 4px;
    font-size: 8px;
    color: #777;
  }

  .active-text {
    color: #ee4fc2;
  }
</style>
