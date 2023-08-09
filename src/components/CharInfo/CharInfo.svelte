<script>
  import loadingGif from "../../resources/loading.gif";
  import errorGif from "../../resources/error.gif";

  export let promiseOne;
</script>

<div class="char__info">
  {#await promiseOne}
    <img src={loadingGif} alt="loading gif" class="loading-gif" />
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
    <div class="char__comics">Comics:</div>
    {#if response[0].comics.items.length === 0}
      <p>There is no comics with this character</p>
    {/if}
    <ul class="char__comics-list">
      {#each response[0].comics.items.slice(5) as comics, i}
        {#if i <= 5}
          <li class="char__comics-item">
            {comics.name}
          </li>
        {/if}
      {/each}
    </ul>
  {:catch error}
    <img src={errorGif} alt="error gif" class="error-gif" />
  {/await}
</div>

<style>
  .char__info {
    padding: 25px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 5;
    background-color: #fff;
    height: 700px;
    width: 370px;
  }
  .char__info-name {
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
  }
  .char__info .skeleton {
    margin-top: 30px;
  }
  .char__basics {
    display: grid;
    grid-template-columns: 150px auto;
    column-gap: 25px;
  }
  .char__basics img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .char__btns {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .char__btns a:nth-child(2) {
    margin-top: 10px;
  }
  .char__descr {
    margin-top: 15px;
    font-size: 14px;
    line-height: 18px;
  }
  .char__comics {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
  }
  .char__comics-list {
    position: relative;
    margin-top: 10px;
  }
  .char__comics-item {
    width: 100%;
    padding: 0px 10px;
    line-height: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
  }
  .char__select {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
  .button {
    min-width: 101px;
    height: 40px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    transition: 0.3s transform;
    border: none;
    background-color: #9f0013;
    line-height: 18px;
    cursor: pointer;
  }
  .button:hover {
    transform: translateY(-5px);
  }
  .button__secondary {
    background-color: #5c5c5c;
    margin: 15px 0px 0px 0px;
  }
  .error-gif {
    width: 300px;
  }
  .loading-gif {
    height: 180px;
  }
</style>
