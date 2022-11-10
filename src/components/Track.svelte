<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { Music } from "../types/music";
  import { currentMusic } from "../store";

  const dispatch = createEventDispatcher();

  export let music: Music;

  $: isCurrentMusic = $currentMusic === music.videoId;

  function handleClick() {
    $currentMusic = music.videoId;

    dispatch("SelectMusic", music);
  }
</script>

<div class="track-item" on:click={handleClick}>
  <div class="left">
    <img
      src="/cover.jpg"
      class={`cover ${isCurrentMusic && "is-active-track"}`}
      alt="Foto de capa da musica"
    />
    <h2 class="name {isCurrentMusic && 'is-active-track-name'}">
      {music.title}
    </h2>
  </div>

  <p class="author">{music.author}</p>

  <p class="duration">{music.duration}</p>
</div>

<style>
  .track-item {
    margin-bottom: 10px;
    border-bottom: 1px solid #222;
    padding: 10px 0px;
    cursor: pointer;

    display: grid;
    grid-template-columns: 500px 1fr auto;
    grid-gap: 10px;
    align-items: center;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .cover {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: grayscale(100%);
  }

  .is-active-track {
    filter: grayscale(0%);
  }

  .name {
    color: white;
    font-size: 12px;
    width: 400px;
  }

  .is-active-track-name {
    color: #ee4fc2;
  }

  .author {
    color: #777;
    font-size: 10px;
  }

  .duration {
    color: #777;
    font-size: 10px;
  }
</style>
