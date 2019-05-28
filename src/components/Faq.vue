<template>
  <div class="mt-32 mb-32">
    <div class="px-4 flex flex-col items-center content-center self-center justify-center">
      <h1 class="mb-24 font-medium text-4xl">Still unsure?</h1>
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
          "cardTitle": "Why should I use Union?",
          "cardDescription": "Union is self-deployable unlike other platforms, which means it cannot be shut down or censored. Union does not keep any proceedings fees and supports crypto transactions by default. We allow for creators to easily deploy our platform in their own infrastructure and choose which plugins to use to enhance it."
        },
        {
          "cardId": "2",
          "cardTitle": "How can I use it?",
          "cardDescription": "For now you can deploy your own instance by following the instructions on our Github repository. We can also help you with that, join our discord and we will give it our best to help you. In the future there will be easier solutions such as click-to-deploy instances, our own hosted version and multiple plugins to augment Union."
        },
        {
          "cardId": "3",
          "cardTitle": "When will it be available?",
          "cardDescription": "We’re working hard on it (@alvesjtiago and @jackveiga) to release the first alpha version by the end of June with a minimal set of features that will help creators with their audiences. If you’d like to support development please donate via here and help us spread the word about @meetunion with other creators."
        },
      ]
    }
  },
}
</script>