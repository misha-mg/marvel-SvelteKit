<script>
  let comics = true;
</script>

<nav class="app__header">
  <h1 class="app__title">
    <a href="/"><span>Marvel</span> information portal</a>
  </h1>
  <div class="app__menu">
    <ul>
      <li>
        <a class:activeStyle={comics} href="/" on:click={() => (comics = true)}
          >Characters</a
        >
      </li>
      /
      <li>
        <a
          class:activeStyle={!comics}
          href="/comics"
          on:click={() => (comics = false)}>Comics</a
        >
      </li>
    </ul>
  </div>
</nav>

<slot />

<style>
  a {
    color: #000;
    transition: all 0.2s;
  }
  a:hover {
    color: #9f0013;
  }
  .app__header {
    display: flex;
    justify-content: space-between;
  }
  .app__title {
    font-weight: bold;
    font-size: 28px;
    line-height: 37px;
  }
  span,
  .activeStyle {
    color: #9f0013;
  }
  .app__menu ul {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
  .app__menu li {
    margin: 0 8px;
  }
  @media screen and (max-width: 730px) {
    .app__header {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
    .app__title {
      margin-bottom: 25px;
      font-size: 25px;
    }
    .app__menu a {
      font-size: 20px;
    }
  }
</style>
