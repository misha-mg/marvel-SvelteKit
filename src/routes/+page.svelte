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

  let promiseOne = takeOneChar(id);
</script>

<RandomChar />

<div class="char__block">
  <CharList {getCharId} />
  <CharInfo {promiseOne} />
</div>

<style>
  .char__block {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 1150px) {
    .char__block {
      justify-content: space-around;
    }
  }

  @media screen and (max-width: 730px) {
    .char__block {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
