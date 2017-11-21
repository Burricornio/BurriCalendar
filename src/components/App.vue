<template>
    <div>{{ msg }}</div>
</template>
<script>
export default {
   data() {
       return {
           msg: 'Hola Lemmy!'
       }
   },
   created() {
       console.log('Hola' + this.$moment);
   }
}
</script>

