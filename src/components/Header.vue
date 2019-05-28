<template>
  <div class="my-10 flex justify-between">
    <div class="inline-flex flex-row flex-no-wrap items-center">
      <div class="w-1/2 px-12 flex flex-col items-start">
        <h1 class="text-5xl">{{ title }}</h1>
        <div class="mt-6 text-xl leading-normal">{{ description }}</div>
        <div class="mt-12 flex flex-col items-start content-start self-stretch">
          <Button buttonCopy="Create your Union" />
        </div>
      </div>
      <div class="w-1/2 px-12">
        <!-- <img :src="coverImageURL" alt="" /> -->
        <img src="https://previews.dropbox.com/p/thumb/AAfjwRYrsrT5HfvfHthL7m7s8OlTP-AMRbTLkj6eDWLGBAhTdEJubNr0YCmAQkDVnL9BbFGJSJYns28t04h_wvriZKtTenbmXLLUUt9JCGAN16-nwfLfIaARYQK8sch0ckVBCzAJbEzQGl1jducx11L7nmjgh64VB_ZTudrtEMijb4rF43pQrgAc3kpRQN5MZabjgBVwmZzLhfkfXh8-Y2CLBQmJqDT98kyGM4WNbhqopaK6HkT7_bE-IBVn0b2vXjyqB7KK1lTcE7sr1XgISp5iXYgcG64xQ9oRJJ_2M7MXM9k-PAo0Eu23n7lcvO98nzhM-j9kVV-WlWnbKjGYvM7d/p.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Header',
  components: { Button },
  props: {
    title: String,
    description: String,
    coverImageURL: String
  }
}
</script>
