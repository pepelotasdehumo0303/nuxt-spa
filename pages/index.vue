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
    // const json = {
    //   method: "post",
    //   body :  {
    //       title: "nuxt spa test 0.00",
    //       content: "qwerty12345",
    //       created_at: "1606592051",
    //       updated_at: "1606592051"
    //   }
    // }

    // const data = await this.$axios.$post('https://applicationnotes.000webhostapp.com/api/notes', JSON.stringify(json))

    // console.log(data)
    let jsonPost = {
      method: "post",
      body: {
        title: "Title",
        content: "qwerty12345",
        created_at: "1606592051",
        updated_at: "1606592051",
      },
    };
    const data = await this.$axios.$post('/',
    jsonPost)

    console.log(data)
  },
};
</script>

<style>
</style>