<script>
  import "./ComicsList.css";
  import loadingGif from "../../resources/loading.gif";
  import errorGif from "../../resources/error.gif";
  import { takeAllComics } from "../../app/utils";
  import ComicsListItem from "../ComicsListItem/ComicsListItem.svelte";
  import { setContext } from "svelte";

  let offset = 210;
  let comicsList = [];
  let loading = true;
  export let getComicId;
  let comicId = 4;

  let promiseAll = takeAllComics(offset);

  function newPromise() {
    promiseAll
      .then((value) => {
        comicsList = [...comicsList, ...value];
        loading = false;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function LoadMore() {
    offset += 8;
    loading = true;
    promiseAll = takeAllComics(offset);
    newPromise();
  }
  newPromise();
</script>

<div class="comics__list">
  <ul class="comics__grid">
    {#each comicsList as comic}
      <a on:click={() => getComicId(comic.id)} href="/comics/{comic.id}">
        <ComicsListItem
          path={comic.thumbnail.path}
          extension={comic.thumbnail.extension}
          name={comic.name}
          title={comic.title}
          price={comic.prices[0].price}
        />
      </a>
    {/each}
  </ul>
  {#if loading}
    <div class="loading-gif-block">
      <img src={loadingGif} alt="loading gif" />
    </div>
  {/if}
  <button
    class:disabled={loading}
    class="button button__main button__long"
    on:click={() => LoadMore()}
  >
    <div class="inner">load more</div>
  </button>
</div>
