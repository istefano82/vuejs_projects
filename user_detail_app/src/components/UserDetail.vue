<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
          <p>User Age: {{ userAge }}</p>
        <button type="button" name="button" @click="resetName">Reset Name</button>
        <button type="button" name="button" @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main'
  export default{
      props: {
          name: {
              type: String,
              required: true
            },
          resetFn: Function,
          userAge: Number
      },
      methods: {
        resetName () {
          this.name = 'Ivo';
          this.$emit('nameWasReset', this.name);
        }
      },
      created() {
          eventBus.$on('ageWasEdited', (age) => {
              this.userAge = age;
          });
      }
    }
</script>


<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
