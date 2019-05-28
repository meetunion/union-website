<template>
  <div class="bg-white">
    <div class="container mx-auto px-8 lg:px-4">
      <Header />
      <div class="flex">
        <Intro
          :title="title"
          :description="description"
          :profilePictureURL="profilePictureURL"
          :coverImageURL="coverImageURL"
        />
      </div>
    <qrcode
      :value="ethAddress"
      :options="{ width: 200 }"
      v-if="ethAddress"
    ></qrcode>
      <Section />
      <div class="mt-64 mb-64 flex flex-col items-center justify-center content-center">
        <h1 class="mb-12 font-medium text-4xl">Start your Union today!</h1>
        <Button buttonCopy="Create your Union" />
      </div>
      <Faq />
      <div class="mt-64 mb-64 flex flex-col items-center justify-center content-center">
        <h1 class="mb-12 font-medium text-4xl">Shape the future of Union!</h1>
        <Button buttonCopy="Support this project" />
        <div class="mt-6"></div>
        <Button buttonCopy="Contribute on Github" />
      </div>
    </div>
    <div class="bg-indigo-400 border-purple-light border-t-2">
      <div class="container mx-auto px-8 lg:px-4">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../services/ApiManager'
import Button from '@/components/Button'
import Intro from '@/components/Intro'
import Header from '@/components/Header'
import Section from '@/components/Section'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import qrcode from '@chenfengyuan/vue-qrcode'

export default {
  name: 'Home',
  components: { Intro, Header, Button, Section, Footer, Faq, qrcode },
  data: () => {
    return {
      title: '',
      description: '',
      url: '',
      buttonCopy: '',
      profilePictureURL: '',
      coverImageURL: '',
      twitterUrl: '',
      discordUrl: '',
      ethAddress: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      Api.get('union').then(response => {
        this.title = response.data.title
        this.description = response.data.description
        this.url = response.data.url
        this.profilePictureURL = response.profile_picture_url
        this.coverImageURL = response.data.cover_image_url
        this.twitterUrl = response.data.twitter_url
        this.discordUrl = response.data.discord_url
        this.ethAddress = response.data.eth_address
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
