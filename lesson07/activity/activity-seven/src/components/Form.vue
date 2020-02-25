<template>
  <form>
        <div class="form-group">
            <label for="activity">Lesson07 activity: Vue</label>
            <p id="demo">Please use my form:</p>
            <input type="text" placeholder="Enter your favorite color">
            <br>
            <br>
            <button id="button1" type="submit" title="Click other button first" disabled="disable">Submit</button>
            <button v-on:click="enable" type="button">Click me!</button>
        </div>
  </form>
</template>

<script>
export default {
  methods: {
    enable: function() {
      document.getElementById("button1").removeAttribute("disabled");
      document.getElementById("button1").removeAttribute("title");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
