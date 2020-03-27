<template>
  <div class="wrapper">

    <h1>CATS!</h1>

    <p v-if="errorMessage">{{errorMessage}}</p>

    <div v-for="cat in cats" :key="cat.id">
      <img :src="cat.url">
    </div>

  </div>
</template>

<script>
import axios from 'axios'
// We are using The Cat API. Details and documentation here: https://thecatapi.com/
export default{
  data(){
    return {
      cats: [],
      errorMessage: undefined
    }
  },
  mounted(){
    console.log("The component mounted")
    // NOTE: API keys should always be kept secret and not committed to version control.
    // We're breaking this rule because it's a free API that we cannot change data in,
    // and we haven't yet learned good ways to keep secrets secure in a web app.
    // But don't ever do this in a work project!
    axios.defaults.headers.common['x-api-key'] = "2a577f76-6712-4727-851e-2ee89aef3053"
    axios
      .get('https://api.thecatapi.com/v1/images/search', { params: { limit:10, size:"full" } } )
      .then(response => {
        // Test your error handling by uncommenting the line below
        // throw new Error('oh no!')
        console.log('got a response! ', response)
        this.cats = response.data
      })
      .catch(err=>{
        console.error('oops an error: ', err)
        this.errorMessage = "opps an error occured"
      })
  }
}


</script>
<style>
img {
  max-width: 15rem;
}
</style>
