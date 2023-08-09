<script>
  import "./RandomChar.css";
  import RandomCharInfo from "../RandomCharInfo/RandomCharInfo.svelte";
  import RandomCharStatic from "../RandomCharStatic/RandomCharStatic.svelte";
  import { takeOneChar } from "../../app/utils";

  let id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
  let promise = takeOneChar(id);
  function updateChar() {
    id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    promise = takeOneChar(id);
  }
</script>

<div class="randomchar">
  <RandomCharInfo {promise} />
  <RandomCharStatic {updateChar} />
</div>
