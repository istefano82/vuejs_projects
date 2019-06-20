<template>
  <div class="">
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
  </div>

</template>

<script type="text/javascript">
    export default {
      data () {
        return {
          link: {
            name: 'userEdit',
             params: {
               id: this.$route.params.id
              },
              query:{
                 locale: 'en', q:100
               },
               hash: '#data'
             }
        }
      },
      beforeRouteEnter(to, from, next) {
        // Can check if user is authenticated for example before allowing him to enter
        if (true) {
           next();
        } else {
           next(false);
        }

      }
    }

</script>
