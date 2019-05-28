<template>
  <div class="mt-24">
    <div class="mt-6 px-4 flex flex-row flex-wrap items-center content-center self-center  justify-center">
      <Card v-bind:cardItems="cardItems" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Faq',
  components: { Card },
  data: () => {
    return {
      cardItems: [
        {
          "cardId": "1",
          "cardTitle": "1. What is Union?",
          "cardDescription": "Union is an adaptable censorship resistant platform for creators to share their work and receive support from their community."
        },
        {
          "cardId": "2",
          "cardTitle": "2. Why should I use Union?",
          "cardDescription": "Since Union is self-deployable unlike other platforms it cannot be shut down or censored. Union does not keep any proceedings fees and supports crypto transactions by default. We allow for creators to easily deploy our platform in their own infrastructure and choose which plugins to use to enhance it."
        },
        {
          "cardId": "3",
          "cardTitle": "3. How can I use it?",
          "cardDescription": "For now you can deploy your own instance by following the instructions on our Github. In the future there will be click-to-deploy instances, our own hosted version and multiple plugins to augment Union."
        },
        {
          "cardId": "4",
          "cardTitle": "4. When will it be available?",
          "cardDescription": "We’re working hard (@alvesjtiago and @jackveiga) to release the first alpha version by the end of June with a minimal set of features. If you’d like to support development please donate via XYZ and help us spread the word @meetunion."
        },
      ]
    }
  },
}
</script>