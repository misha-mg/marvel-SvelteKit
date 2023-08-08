<script>
  import { beforeUpdate, onMount } from "svelte";
  import mjolnir from "../resources/img/mjolnir.png";
  import loadingGif from "../resources/loading.gif";
  import errorGif from "../resources/error.gif";
  import Layout from "./+layout.svelte";

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=c5d6fc8b83116d92ed468ce36bac6c62";

  // @ts-ignore
  async function take() {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    const url = `${_apiBase}characters/${id}?${_apiKey}`;
    // const url = `https://gateway.marvel.com:443/v1/public/characters?offset=210&apikey=e43f19f4472459ad11df2d6d89eaef55`;

    let response = await fetch(url);
    const data = await response.json();
    return data.data.results;
  }
  let promise = take();

  function updateChar() {
    promise = take();
  }
</script>

<div class="randomchar">
  <div class="randomchar__block">
    {#await promise}
      <img src={loadingGif} alt="loading gif" class="loading-gif" />
    {:then response}
      <img
        src={`${response[0].thumbnail.path}.${response[0].thumbnail.extension}`}
        alt="Random character"
        class="randomchar__img"
      />
      <div class="randomchar__info">
        <p class="randomchar__name">{response[0].name}</p>
        <p class="randomchar__descr">
          {#if response[0].description}
            {response[0].description.slice(0, 150)}
          {:else}
            This character has no description
          {/if}
        </p>
        <div class="randomchar__btns">
          <button class="button button__main">
            <a href={response[0].urls[0].url}>homepage</a>
          </button>
          <button class="button button__secondary">
            <a href={response[0].urls[1].url}>Wiki</a>
          </button>
        </div>
      </div>
    {:catch error}
      <img src={errorGif} alt="error gif" class="error-gif" />
    {/await}
  </div>

  <!--  -->

  <div class="randomchar__static">
    <p class="randomchar__title">
      Random character for today!<br />
      Do you want to get to know him better?
    </p>
    <p class="randomchar__subtitle">Or choose another one</p>
    <button class="button button__main">
      <div class="inner" on:click={updateChar}>try it</div>
    </button>
    <img src={mjolnir} alt="mjolnir" class="randomchar__decoration" />
  </div>
</div>

<style>
  a {
    color: #fff;
  }
  .randomchar {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  }
  .randomchar__block {
    padding: 40px 35px;
    display: grid;
    grid-template-columns: 180px auto;
    column-gap: 30px;
  }
  .randomchar__img {
    width: 180px;
    height: 180px;
    object-fit: cover;
  }
  .randomchar__info {
    display: grid;
    grid-template-rows: minmax(29px, auto) 80px 38px;
    row-gap: 10px;
    padding-top: 3px;
  }
  .randomchar__name {
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;
  }
  .randomchar__descr {
    font-size: 14px;
    /* line-height: 18px; */
  }

  .randomchar__static {
    padding: 40px 35px;
    background-color: #232222;
    position: relative;
  }
  .randomchar__static button {
    margin-top: 13px;
  }
  .randomchar__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.045em;
    color: #ffffff;
    margin-bottom: 30px;
  }
  .randomchar__subtitle {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.045em;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .randomchar:nth-child(2) {
    margin-top: 33px;
  }
  .randomchar__decoration {
    position: absolute;
    bottom: 14px;
    right: -37px;
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
    margin-left: 30px;
  }
  .error-gif {
    width: 300px;
  }
  .loading-gif {
    height: 180px;
  }
</style>
