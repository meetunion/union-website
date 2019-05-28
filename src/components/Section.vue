<template>
  <div class="my-10 flex flex-col items-center">
    <div class="flex flex-col">
      <h1 class="text-6xl text-center leading-tight">Experience magically<br> sharing your content</h1>
      <h1 class="mt-5 text-xl text-center">Creators shoudn't have to leave the destiny of their community in others hands.</h1>
      <img class="mt-16 px-6" src="https://previews.dropbox.com/p/thumb/AAe77gIHR9NUJrzM7bnwAtySexmfhgKKdRXARh2M7Ilumpe34oQzeDUH9Mm_APLlJOHh7O49o2fpVY_-RVFKKvNvwWz3Vkj67497oSsMdZSVESxm1LZ-bSCHwK5yXdNnTrRgYWbjtA_qHaCRykBSjePvxBa25g5wJa4UdfOPtkOGAeSphxfxKB2LTS7AVW48xHdGD_UZEfCxWO0eT40MOksdqkGy3uH3JzKuU1XLsDk6CtlO8h-mHHcDltpJLfY6nyK327NCYt8x7W2Xxplsgjh31VqxmHa50DRsTS1RoIsBKuLSHG9rtO_KzvAtMuBiDS0nqQEy9Ey-1ekZPOxh8E0Xi06OoNUzW-7-L5ypWZzhlQ/p.png" alt="" />
    </div>
    <div class="mt-6 flex flex-row">
      <div class="px-4 flex flex-row flex-wrap items-start content-between self-center  justify-between">
        <Feature v-bind:featuresItems="featuresItems" />
      </div>
    </div>
  </div>
</template>

<script>
import Feature from '@/components/Feature'

export default {
  name: 'Section',
  components: { Feature },
  data: () => {
    return {
      featuresItems: [
        {
          "featureId": "1",
          "featureIcon": "https://image.flaticon.com/icons/png/512/33/33447.png",
          "featureTitle": "Simple setup",
          "featureDescription": "Get started quickly, so you can go back to focusing on creating instead."
        },
        {
          "featureId": "2",
          "featureIcon": "https://image.flaticon.com/icons/png/512/33/33447.png",
          "featureTitle": "Reward your fans",
          "featureDescription": "Give your fans the exclusive content and experiences that they crave for."
        },
        {
          "featureId": "3",
          "featureIcon": "https://image.flaticon.com/icons/png/512/33/33447.png",
          "featureTitle": "No censorship barriers",
          "featureDescription": "Make any of your content available to anyone. You hold the power in the end."
        },
        {
          "featureId": "4",
          "featureIcon": "https://image.flaticon.com/icons/png/512/33/33447.png",
          "featureTitle": "Get paid with crypto",
          "featureDescription": "No payment provider, no bundled payouts and near zero transaction costs."
        },
        {
          "featureId": "5",
          "featureIcon": "https://image.flaticon.com/icons/png/512/33/33447.png",
          "featureTitle": "Customizable plugins",
          "featureDescription": "An easy way for us to help you transform ou platform in whatever you need."
        },
                {
          "featureId": "6",
          "featureIcon": "https://image.flaticon.com/icons/png/512/33/33447.png",
          "featureTitle": "All open source",
          "featureDescription": "Peace of mind, transparency and a platform that anyone can contribute to."
        },
      ]
    }
  },
}
</script>