<script>
  import "./SingleComicPage.css";
  import AppBanner from "../../components/AppBanner/AppBanner.svelte";
  import loadingGif from "../../resources/loading.gif";
  import errorGif from "../../resources/error.gif";
  import { getOneComic } from "../../app/utils.js";

  export let comicId;

  let promiseOne = getOneComic(comicId);
</script>

<AppBanner />

<div class="single-comic">
  {#await promiseOne}
    <div class="loading-gif-block">
      <img src={loadingGif} alt="loading gif" />
    </div>
  {:then response}
    <img
      src={`${response[0].thumbnail.path}.${response[0].thumbnail.extension}`}
      alt="name"
      class="single-comic__img"
    />
    <div class="single-comic__info">
      <h2 class="single-comic__">{response[0].title}</h2>
      <p class="single-comic__descr">
        {response[0].description
          ? response[0].pageCount
          : "There is no description"}
      </p>
      <p class="single-comic__descr">
        {response[0].pageCount}
      </p>
      <p class="single-comic__descr">Language: en-us</p>
      <div class="single-comic__price">{response[0].prices[0].price}</div>
    </div>
    <li><a href="../comics" class="single-comic__back">Back to all</a></li>
  {:catch error}
    <img src={errorGif} alt="errorGif" />
  {/await}
</div>

<style>
  .loading-gif-block {
    width: 100%;
    height: 200px;
    text-align: center;
  }
  .loading-gif-block img {
    height: 200px;
    width: 200px;
  }
</style>
