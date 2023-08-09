<script>
  import RandomChar from "../components/RandomChar/RandomChar.svelte";
  import CharList from "../components/CharList/CharList.svelte";
  import CharInfo from "../components/CharInfo/CharInfo.svelte";
  import { takeOneChar, takeAllChars } from "../app/utils";

  let id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
  let offset = 210;

  let promiseOne = takeOneChar(id);
  let promiseAll = takeAllChars(offset);
</script>

<RandomChar />

<div class="char__block">
  <CharList {promiseAll} />
  <CharInfo {promiseOne} />
</div>

<style>
  .char__block {
    display: flex;
    justify-content: space-between;
  }
</style>
