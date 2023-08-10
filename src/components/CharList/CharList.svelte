<script>
  import "./CharList.css";
  import CharListItem from "../CharListItem/CharListItem.svelte";
  import loadingGif from "../../resources/loading.gif";
  import errorGif from "../../resources/error.gif";
  // import { takeOneChar, takeAllChars } from "../app/utils";

  export let promiseAll;
  export let getCharId;
  export let LoadMore;
</script>

<div class="char__list">
  <ul class="char__grid">
    {#await promiseAll}
      <div class="loading-gif">
        <img src={loadingGif} alt="loading gif" />
      </div>
    {:then response}
      {#each response as item}
        <a on:click={() => getCharId(item.id)}>
          <CharListItem
            thumbnailPath={item.thumbnail.path}
            thumbnailExtension={item.thumbnail.extension}
            name={item.name}
          />
        </a>
      {/each}
    {:catch error}
      <img src={errorGif} alt="error gif" class="error-gif" />
    {/await}
  </ul>

  <button class="button button__main button__long" on:click={() => LoadMore()}>
    <div class="inner">load more</div>
  </button>
</div>

<style>
  .loading-gif {
    width: 650px;
    display: flex;
    justify-content: center;
  }
  .loading-gif img {
    height: 200px;
    width: 200px;
  }
</style>
