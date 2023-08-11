<script>
  export let path;
  export let extension;
  export let name;
  export let title;
  export let price;
</script>

<li class="comics__item">
  <img class="comics__item-img" src={`${path}.${extension}`} alt={name} />
  <div class="comics__item-title">{title}</div>
  <div class="comics__item-price">{price}</div>
</li>
