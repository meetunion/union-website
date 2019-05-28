<template>
  <div class="mt-16 pb-16 p-8">
    <div class="container mx-auto text-left opacity-75 text-sm lg:px-4">
      <div
        class="flex flex-col justify-center items-start content-start md:flex-row mb-4"
      >
        <div class="sm:w-1/2 h-auto">
      <p>Union is da bommmbbbb!!</p>
    </div>
    <div class="flex flex-col sm:w-1/2 h-auto sm:mt-0 mt-8">
      <p>Connect</p>
      <a :href="twitterUrl">Twitter</a>
      <a :href="discordUrl">Discord</a>
    </div>
  </div>
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