<template>
  <div class="home">
    <ParcelTable></ParcelTable>
  </div>
</template>

<script>
// @ is an alias to /src
import ParcelTable from '../components/ParcelTable'

export default {
  name: 'home',
  components: {
    ParcelTable,
  },
  created(){
    this.$store.dispatch('getAllParcels');
  }
}
</script>
