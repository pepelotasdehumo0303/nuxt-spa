<template>
  <section class="section">
    
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },

  async asyncData({$axios}) {
    const data = await $axios.$get('https://applicationnotes.000webhostapp.com/api/notes')
    console.log(data)
    
  }
}
</script>
