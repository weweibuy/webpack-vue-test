<template>
  <div class="about">About</div>
  <input type="text" v-model="inputValue">
  <button @click="setInputValue">更新值</button>
</template>

<script>
export default {
  data(){
    return {
      inputValue: this.$store.getters['getInputValue']
    }
  },
  methods: {
    setInputValue(){
      this.$store.dispatch('setInputValue', this.inputValue)
    }
  },
  watch: {
    "$store.state.inputValue": {
      handler(data){
        console.log(data)
      }
    }
  }

}
</script>

<style scoped>

</style>