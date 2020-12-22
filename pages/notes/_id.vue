<template>
  <div>
    <h1>Nombre: {{note.title}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: ''
    }
  },

  async asyncData({params}) {
    console.log('asyncData de _id')
    const res = await fetch('https://applicationnotes.000webhostapp.com/api/notes/' + params.id)
    const note = await res.json()
    return {note}
  }

}
</script>

<style>

</style>