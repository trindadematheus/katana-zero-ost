<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Menu from "./pages/Menu.svelte";
  import Player from "./pages/Player.svelte";

  import "./styles/global.css";
</script>

<Router>
  <Route path="/">
    <Player />
  </Route>

  <Route path="player">
    <Player />
  </Route>
</Router>
