<script context="module">
  let YouTubeIframeAPIReady = false;
</script>

<script>
  let youtube;
  export let player;
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  // @ts-ignore
  let divId = "player_" + parseInt(Math.random() * 100000).toString();
  export let videoId;
  export let height = "390";
  export let width = "640";
  onMount(() => {
    let ytTagUrl = "https://www.youtube.com/iframe_api";
    if (!isMyScriptLoaded(ytTagUrl)) {
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement("script");
      tag.src = ytTagUrl;
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    // @ts-ignore
    window.onYouTubeIframeAPIReady = function () {
      //console.log('hello')
      window.dispatchEvent(new Event("YouTubeIframeAPIReady"));
    };
    window.addEventListener("YouTubeIframeAPIReady", function () {
      if (YouTubeIframeAPIReady == false) {
        // first load of an YT Video on this project
        YouTubeIframeAPIReady = true; // now the Player can be created
        createPlayer();
      }
    });
    let handler = {
      get: function (target, prop) {
        var value = target[prop];
        return typeof value == "function" ? value.bind(target) : undefined;
      },
    };
    function createPlayer() {
      // @ts-ignore
      youtube = new YT.Player(divId, {
        height,
        width,
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
      player = new Proxy(youtube, handler);
    }
    if (YouTubeIframeAPIReady) {
      createPlayer(); // if the YT Script is ready, we can create our player
    }
  });
  function isMyScriptLoaded(url = "") {
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length; i--; ) {
      if (scripts[i].src == url) return true;
    }
    return false;
  }
  function onPlayerReady(data) {
    dispatch("PlayerReady", data.target.playerInfo.videoData);
  }
  function onPlayerStateChange({ data }) {
    dispatch("StateChange", data);
  }
</script>

<div class="yt-component">
  <div id={divId} />
</div>
