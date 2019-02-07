<template>
  <div class="hello">
     Ini komponen User
     Nama User :
     {{firstName}}
     {{lastName}}
  </div>
</template>

<script>
	name : "User"
	props: [
      'firstName',
      'lastName'
  ]
</script>

<style scoped>

</style>
