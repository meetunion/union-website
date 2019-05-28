<template>
  <div>
    <div>
      <p>Union is da bommmbbbb!!</p>
    </div>
    <div>
      <p>Connect</p>
      <a>{{ twitterUrl }}</a>
      <a>{{ discordUrl }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    twitterUrl: String,
    discordUrl: String,
  }
}
</script>