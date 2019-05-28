<template>
  <div class="container mx-auto px-8 lg:px-4">
    <div class="flex min-h-screen">
      <Header
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
    <div class="mt-32 flex flex-col items-center justify-center content-center">
      <h1 class="mb-6 font-medium text-3xl">Start your Union today!</h1>
      <Button buttonCopy="Get started" />
    </div>
    <Faq />
    <Footer />
    <div>
      <p>{{ discordUrl }}</p>
      <p>{{ twitterUrl }}</p>
    </div>
  </div>
</template>

<script>
import Api from '../services/ApiManager'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Section from '@/components/Section'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import qrcode from '@chenfengyuan/vue-qrcode'

export default {
  name: 'Home',
  components: { Header, Button, Section, Footer, Faq, qrcode },
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
