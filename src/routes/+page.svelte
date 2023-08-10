<script>
  import RandomChar from "../components/RandomChar/RandomChar.svelte";
  import CharList from "../components/CharList/CharList.svelte";
  import CharInfo from "../components/CharInfo/CharInfo.svelte";
  import { takeOneChar, takeAllChars } from "../app/utils";

  let id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
  let idFromList;
  let limit = 9;

  function getCharId(newId) {
    idFromList = newId;
    promiseOne = takeOneChar(newId);
  }
  function LoadMore() {
    limit += 9;
    takeAllChars(limit);
  }

  let promiseOne = takeOneChar(id);
  let promiseAll = takeAllChars(limit);
</script>

<RandomChar />

<div class="char__block">
  <CharList {promiseAll} {getCharId} {LoadMore} />
  <CharInfo {promiseOne} />
</div>

<style>
  .char__block {
    display: flex;
    justify-content: space-between;
  }
</style>
