<template>
    <div>
      <a-button class="btn" @click="showAll" type="primary">All</a-button>
      <a-button class="btn" @click="showOrder" type="primary">已预约</a-button>
      <a-button class="btn" @click="showFetched" type="primary">已取件</a-button>
      <a-button @click="toAddParcelPage" type="primary">添加</a-button>
    </div>
</template>

<script>
    export default {
      name: "Buttons",
      methods:{
        showAll() {
          this.$store.commit('showAll');
        },
        showOrder() {
          this.$store.commit('showOrder');
          console.log(this.$store.state.list)
        },
        showFetched() {
          this.$store.commit('showFetched');
        },
        toAddParcelPage(){
          this.$router.push("/AddParcel");
        }
      },
    }
</script>

<style scoped>
.btn{
  margin-right: 20px;
}
</style>
