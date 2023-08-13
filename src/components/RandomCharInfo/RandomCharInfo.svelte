<script>
  import loadingGif from "../../resources/loading.gif";
  import errorGif from "../../resources/error.gif";
  export let promise;
</script>

<div class="randomchar__block">
  {#await promise}
    <img src={loadingGif} alt="loading gif" class="loading-gif" />
  {:then response}
    <img
      src={`${response[0].thumbnail.path}.${response[0].thumbnail.extension}`}
      alt="Random character"
      class="randomchar__img"
    />
    <div class="randomchar__info">
      <p class="randomchar__name">{response[0].name}</p>
      <p class="randomchar__descr">
        {#if response[0].description}
          {response[0].description.slice(0, 150)}
        {:else}
          This character has no description
        {/if}
      </p>
      <div class="randomchar__btns">
        <button class="button button__main">
          <a href={response[0].urls[0].url}>homepage</a>
        </button>
        <button class="button button__secondary">
          <a href={response[0].urls[1].url}>Wiki</a>
        </button>
      </div>
    </div>
  {:catch error}
    <img src={errorGif} alt="error gif" class="error-gif" />
  {/await}
</div>

<style>
  .button a {
    color: #fff;
  }
  .loading-gif {
    height: 180px;
    width: 180px;
    margin: 0 auto;
  }
</style>
