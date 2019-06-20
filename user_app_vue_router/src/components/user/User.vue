<template>
  <div class="">
        <h1>The User Page</h1>
        <hr>
        <button type="button" name="button" class="btn btn-primary" @click="navigateToHome">Go To Home</button>
        <hr>
        <router-view></router-view>
  </div>

</template><script type="text/javascript">
  export default {
      methods: {
          navigateToHome() {
              this.$router.push('/');
          }
      }
  }

</script>
