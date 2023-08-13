<script>
  import "./CharInfo.css";
  import loadingGif from "../../resources/loading.gif";
  import errorGif from "../../resources/error.gif";

  export let promiseOne;
</script>

<div class="char__info">
  {#await promiseOne}
    <div class="loading-gif">
      <img src={loadingGif} alt="loading gif" />
    </div>
  {:then response}
    <div class="char__basics">
      <img
        src={`${response[0].thumbnail.path}.${response[0].thumbnail.extension}`}
        alt=""
      />
      <div>
        <div class="char__info-name">{response[0].name}</div>
        <div class="char__btns">
          <button class="button button__main">
            <a href={response[0].urls[0].url}>
              <div class="inner">homepage</div>
            </a>
          </button>
          <button class="button button__secondary">
            <a href={response[0].urls[1].url}>
              <div class="inner">Wiki</div>
            </a>
          </button>
        </div>
      </div>
    </div>

    <div class="char__descr">
      {response[0].description}
    </div>
    <div class="char__comics">
      <div class="char__comics">Comics:</div>
      {#if response[0].comics.items.length === 0}
        <p>There is no comics with this character</p>
      {/if}
      <ul class="char__comics-list">
        {#each response[0].comics.items as comics, i}
          {#if i <= 5}
            <li class="char__comics-item">
              {comics.name}
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {:catch error}
    <img src={errorGif} alt="error gif" class="error-gif" />
  {/await}
</div>

<style>
  .button__secondary {
    margin: 15px 0px 0px 0px;
  }
  .button a {
    color: #fff;
  }
</style>
