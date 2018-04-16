<template lang='pug'>
#app
  h1 {{text}} 📦 🚀
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      text: 'Hello World'
    }
  }
}
</script>
<style lang='stylus' scoped>
#app
  display flex
  justify-content center
  align-items center
  height 100%
h1
  font-weight 300
</style>
