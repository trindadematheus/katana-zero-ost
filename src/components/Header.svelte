<section id="header">
  <div class="container">
    <img src="/cover.jpg" alt="Foto de capa do album" class="cover" />

    <div class="info">
      <h1 class="track-name">Katana Zero (Original Soundtrack)</h1>
      <p class="author">Bill Kiley, LudoWic</p>

      <div class="actions">
        <button class="btn">see game</button>
        <button class="btn btn-secondary">share</button>
      </div>
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 40px;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
  }

  .cover {
    background-color: red;
    width: 200px;
    height: 200px;
  }

  .info {
    margin-left: 20px;
  }

  .track-name {
    color: white;
    text-shadow: 0 0 6px #fff;
    margin-bottom: 10px;
  }

  .author {
    color: #888;
    text-shadow: 0 0 6px #888;
    font-size: 12px;
  }

  .actions {
    margin-top: 40px;

    display: flex;
    align-items: center;
    gap: 12px;
  }

  .btn {
    background-color: white;
    box-shadow: 0 0 6px #fff;
    height: 35px;
    padding: 10px;

    transition: all 400ms;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn-secondary {
    background-color: transparent;
    border: 1px solid white;
    text-shadow: 0 0 6px #888;
    box-shadow: 0 0 6px #fff;
    color: white;
  }
</style>
