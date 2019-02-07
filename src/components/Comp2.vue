<template>
  <div class="">
     Ini komponen 1
     <user name="Test"></user>
  </div>
</template>

<script>
import User from "@/components/User"
export default {
  name: 'Comp2',
  components: {
      User
  },
  data () {
    return {
      msg: 'Welcome to Vue.Js',
      number: 1
    }
  },
  methods: {
    addnumber() {
      this.number++
    }
  },
  mounted() {
    this.number = 200
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
