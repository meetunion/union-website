<template>
  <div class="flex flex-row items-center content-center self-center justify-center">
    <div class="mr-12 flex flex-col max-w-sm rounded-lg overflow-hidden shadow-lg"
      v-for="item in cardItems"
      :key="item.cardId"
      >
      <div class="px-6 py-6">
          <div class="font-bold text-xl mb-3">{{ item.cardTitle }}</div>
          <p class="text-gray-700 text-base leading-normal">{{ item.cardDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardItems: {
      type: Array
    }
  }
}
</script>