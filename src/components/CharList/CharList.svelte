<script>
  import "./CharList.css";
  import CharListItem from "../CharListItem/CharListItem.svelte";
  import loadingGif from "../../resources/loading.gif";
  import errorGif from "../../resources/error.gif";

  export let promiseAll;
</script>

<div class="char__list">
  <ul class="char__grid">
    {#await promiseAll}
      <img src={loadingGif} alt="loading gif" class="loading-gif" />
    {:then response}
      {#each response as item}
        <CharListItem
          thumbnailPath={item.thumbnail.path}
          thumbnailExtension={item.thumbnail.extension}
          name={item.name}
        />
      {/each}
    {:catch error}
      <img src={errorGif} alt="error gif" class="error-gif" />
    {/await}
  </ul>

  <button class="button button__main button__long">
    <div class="inner">load more</div>
  </button>
</div>
