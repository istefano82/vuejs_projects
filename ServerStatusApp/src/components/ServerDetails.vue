<template>
   <div class="row">
      <div class="col-xs-12">
          <p v-if="!server">Please select a Server</p>
          <p v-else="!server">Server #{{ server.id }} selected, Status: {{ server.status }}</p>
          <hr>
          <button type="button" name="button" @click="resetStatus">Change to Normal</button>
      </div>
   </div>
</template>

<script>
  import { serverBus } from '../main';
  export default {
      data: function(){
        return {
            server: null
        }
      },
      methods: {
        resetStatus(){
          this.server.status = 'Normal'
        }
      },
      created() {
          serverBus.$on('serverSelected', (server) => {
              this.server = server;
          });
      }
  }

</script>

<style scoped>

</style>
