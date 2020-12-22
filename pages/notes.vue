<template>
  <section class="section">
    <ul>
      <li v-for="note in data" :key="note.id">
        <nuxt-link :to="`/notes/${note.id}`">{{note.title}}</nuxt-link>
      </li>
    </ul>
    <nuxt-link :to="`/notes/1?q=123`">nota 1 con query</nuxt-link>
    <nuxt-link :to="`/notes/1?q=1234`">nota 1 con query 2</nuxt-link>
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  data() {
    return {
      // data: ''
    }
  },

  components: {
    Card
  },

  // watchQuery: true,

  async asyncData() {
    // const data = await $axios.$get('https://applicationnotes.000webhostapp.com/api/notes')
    // console.log(data)
    console.log('fetch de notes')
    const res = await fetch('https://applicationnotes.000webhostapp.com/api/notes')
    const data = await res.json()
    return {data}
  }
}
</script>
