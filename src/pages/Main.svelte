<script lang="ts">
  import Header from "../components/Header.svelte";
  import TrackList from "../components/TrackList.svelte";
</script>

<div class="wrapper">
  <Header />
  <TrackList />
</div>

<style>
  .wrapper {
    height: 100vh;
    width: 100%;
    padding: 0px 20px;
  }
</style>
