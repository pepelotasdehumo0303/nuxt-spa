<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      Home page <b-icon icon="home" size="is-large" />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira"> Antério Vieira </a>
    </h3>
  </section>
</template>


<script>
// import axios from 'axios'
export default {
  async fetch() {
    try {
      // let jsonPost = {
      //   userId: 1,
      //   title: 'un titulo',
      //   body: 'un body'
      // };
      // const res = await this.$axios.$post('https://jsonplaceholder.typicode.com/posts', jsonPost)
      // console.log('peticion a jsonplaceholder', res)
  
      const json = {
        method: "post",
        body :  {
            title: "Una prueba",
            content: "qwerty12345",
            created_at: "1606592051",
            updated_at: "1606592051"
        }
      }
      const data = await this.$axios.$post('/api/notes', JSON.stringify(json))
      console.log('Peticion a api', data)


      const response = await fethc('/.netlify/functions/hello')
      const func = await response.json()

      console.log(func)

    } catch (error) {
      console.log(error)
    }
  },
};
</script>

<style>
</style>