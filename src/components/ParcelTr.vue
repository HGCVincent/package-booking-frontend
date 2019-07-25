<template>
    <tr>
      <td>{{item.waybillNumber}}</td>
      <td>{{item.recipient}}</td>
      <td>{{item.phoneNumber}}</td>
      <td>{{item.status}}</td>
      <td>{{item.time}}</td>
      <td><a-button type="danger" :size="size" @click="updateParcel(item.id)" v-show="item.status === '未取件'">确认收货</a-button></td>
    </tr>
</template>

<script>
    export default {
      name: "ParcelTr",
      props:['item','index'],
      methods:{
        updateParcel(id){
          this.$store.dispatch('updateParcel',id);
        },
      }
    }
</script>

<style scoped>

</style>
