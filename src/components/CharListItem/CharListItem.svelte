<script>
  import "./CharListItem.css";

  export let thumbnailPath;
  export let thumbnailExtension;
  export let name;
</script>

<li class="char__item">
  <img src={`${thumbnailPath}.${thumbnailExtension}`} alt={name} />
  <div class="char__name">{name}</div>
</li>
