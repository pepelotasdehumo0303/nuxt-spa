<template>
  <section class="section">
    <h1>cambio</h1>
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
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }
}
</script>
