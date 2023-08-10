<script>
  import mjolnir from "../../resources/img/mjolnir.png";
  export let updateChar;
</script>

<div class="randomchar__static">
  <p class="randomchar__title">
    Random character for today!<br />
    Do you want to get to know him better?
  </p>
  <p class="randomchar__subtitle">Or choose another one</p>
  <button class="button button__main" on:click={updateChar}>
    <div class="inner">try it</div>
  </button>
  <img src={mjolnir} alt="mjolnir" class="randomchar__decoration" />
</div>
