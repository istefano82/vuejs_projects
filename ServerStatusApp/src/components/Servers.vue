<template>
   <div class="row">
      <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
            <app-server
            v-for="server in servers"
            :server="server"> </app-server>
          </ul>
      </div>
   </div>
</template>

<script>
    import Server from './Server.vue'
    export default {
      components: {
        'app-server': Server
      },
        data: function(){
            return {
                servers: [
                  {id:1, status: 'Normal'},
                  {id:2, status: 'Critical'},
                  {id:3, status: 'Unknown'},
                  {id:4, status: 'Normal'}
                ]
            };
        },
    }
</script>

<style scoped>

</style>
