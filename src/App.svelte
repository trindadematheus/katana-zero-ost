<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Main from "./pages/Main.svelte";

  import "./styles/global.css";
</script>

<Router>
  <Route path="/">
    <Main />
  </Route>
</Router>
