<template>
  <div>
    <h1>Home</h1>
    <div>
      <div v-for="(item, index) in customData" :key="index">
        <div>{{item[0]}}</div>
        <div>{{item[1]}}</div>
      </div>
      <input type='text' v-model='value' @input="changeValue"/>
    </div>
    <button @click="addData">Add</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Axios from 'axios';
const api = 'https://api.coindesk.com/v1/bpi/currentprice.json'

export default{
  name: 'HomeComponent',
  data() {
    return {
      value: '',
    }
  },
  async mounted(){
    const getData = await Axios.get(api);
    const result = getData.data.bpi;
    const customData = Object.keys(result).map(key => {
      return `${key} : ${result[key].rate}`
    })
    console.log({customData})
    this.$store.commit('addData', customData)
  },
  computed: mapState({
    customData: (state) => state.data
  }),
  methods: {
    changeValue(e) {
      e.preventDefault();
      console.log({e:e.target.value})
      this.value = e.target.value;
    },
    addToData() {
      const {value} = this;
      this.addData(value);
      this.data.push(value);
    },
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
    addData(){
      this.$store.commit('addData', this.value)
      console.log(this.$store.state)
    }
  }
}
</script>

<style>

</style>