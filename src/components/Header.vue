<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg width="48" height="48" viewBox="0 0 230 213" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M142.684 18.4179H123.426L115.334 0.833252L107.224 18.4179H87.9836L102.037 32.9207L96.842 54.0805L115.334 43.593L133.825 54.0805L128.612 32.9207L142.684 18.4179Z" fill="#FEA1A3"/>
      <path d="M198.581 38.8107H179.323L171.222 21.2349L163.112 38.8107H143.872L157.934 53.3223L152.73 74.4733L171.222 63.9858L189.714 74.4733L184.501 53.3223L198.581 38.8107Z" fill="#FEA1A3"/>
      <path d="M142.684 176.503H123.426L115.334 158.918L107.224 176.503H87.9836L102.037 191.015L96.842 212.166L115.334 201.678L133.825 212.166L128.612 191.015L142.684 176.503Z" fill="#FEA1A3"/>
      <path d="M86.7936 38.8107H67.5359L59.4436 21.2349L51.3249 38.8107H32.0847L46.1472 53.3223L40.9431 74.4733L59.4436 63.9858L77.9352 74.4733L72.7136 53.3223L86.7936 38.8107Z" fill="#FEA1A3"/>
      <path d="M55.57 97.2532H36.3122L28.2111 79.6685L20.1012 97.2532H0.861084L14.9236 111.765L9.71947 132.916L28.2111 122.428L46.7028 132.916L41.4899 111.765L55.57 97.2532Z" fill="#FEA1A3"/>
      <path d="M229.807 97.2532H210.549L202.457 79.6685L194.338 97.2532H175.098L189.16 111.765L183.956 132.916L202.457 122.428L220.939 132.916L215.726 111.765L229.807 97.2532Z" fill="#FEA1A3"/>
      <path d="M198.581 155.037H179.323L171.222 137.461L163.112 155.037H143.872L157.934 169.549L152.73 190.7L171.222 180.212L189.714 190.7L184.501 169.549L198.581 155.037Z" fill="#FEA1A3"/>
      <path d="M86.7936 155.037H67.5359L59.4436 137.461L51.3249 155.037H32.0847L46.1472 169.549L40.9431 190.7L59.4436 180.212L77.9352 190.7L72.7136 169.549L86.7936 155.037Z" fill="#FEA1A3"/>
      </svg>
      <span class="ml-3 font-semibold text-black text-xl tracking-tight">Union</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Get Started</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>
