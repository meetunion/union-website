<template>
  <div>
    <div class="mt-24 inline-flex items-start max-w-xs text-left"
      v-for="item in featuresItems"
      :key="item.featuresId"
      >
      <img class="w-1/6" :src=item.featureIcon alt="" />
      <div class="ml-4 flex flex-col">
        <h1 class="font-medium text-xl">{{ item.featureTitle }}</h1>
        <p class="mt-1 max-w-xs pr-12 font-normal text-base lending-normal">{{ item.featureDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    featuresItems: {
      type: Array
    }
  }
}
</script>