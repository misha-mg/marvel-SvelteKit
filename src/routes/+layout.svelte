<nav class="app__header">
  <h1 class="app__title">
    <a href="/"><span>Marvel</span> information portal</a>
  </h1>
  <div class="app__menu">
    <ul>
      <li><a href="/">Characters</a></li>
      /
      <li><a href="/comics">Comics</a></li>
    </ul>
  </div>
</nav>

<slot />

<style>
  a {
    color: #000;
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
  span {
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
</style>
