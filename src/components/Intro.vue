<template>
  <div class="my-10 flex flex-col items-center">
    <h1 class="mt-32 header__extra">Give creators full control?<br> you're goddamn right.</h1>
    <p class="mt-8 header__extra--caption--small">Create a simple community subscriptions platform with Union.</p>
    <div class="mt-32 inline-flex flex-row flex-no-wrap items-center">
      <div class="w-1/2 px-12 flex flex-col items-start">
        <h1 class="header__intro">{{ title }}</h1>
        <div class="mt-6 pr-6 body__intro">{{ description }}</div>
        <div class="mt-12 flex flex-col items-start content-start self-stretch">
          <Button buttonCopy="Create your Union" />
          <div class="mt-6"></div>
          <Button buttonCopy="Support this project" />
        </div>
      </div>
      <div class="w-1/2 max-w-xl px-16">
        <!-- <img :src="coverImageURL" alt="" /> -->
        <img src="https://previews.dropbox.com/p/thumb/AAfjwRYrsrT5HfvfHthL7m7s8OlTP-AMRbTLkj6eDWLGBAhTdEJubNr0YCmAQkDVnL9BbFGJSJYns28t04h_wvriZKtTenbmXLLUUt9JCGAN16-nwfLfIaARYQK8sch0ckVBCzAJbEzQGl1jducx11L7nmjgh64VB_ZTudrtEMijb4rF43pQrgAc3kpRQN5MZabjgBVwmZzLhfkfXh8-Y2CLBQmJqDT98kyGM4WNbhqopaK6HkT7_bE-IBVn0b2vXjyqB7KK1lTcE7sr1XgISp5iXYgcG64xQ9oRJJ_2M7MXM9k-PAo0Eu23n7lcvO98nzhM-j9kVV-WlWnbKjGYvM7d/p.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Intro',
  components: { Button },
  props: {
    title: String,
    description: String,
    coverImageURL: String
  }
}
</script>