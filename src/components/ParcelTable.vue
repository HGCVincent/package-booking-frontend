<template>
    <div id="tbldiv">
      <buttons></buttons>
      <br/>
      <table>
        <thead>
            <tr>
              <td style="width: 200px">运单号</td>
              <td style="width: 200px">收件人</td>
              <td style="width: 200px">电话</td>
              <td style="width: 200px">状态</td>
              <td style="width: 200px">预约时间</td>
            </tr>
        </thead>
        <tbody >
            <parcel-tr v-for="(item,index) of list" :item="item" :index="index"></parcel-tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import ParcelTr from './ParcelTr'
  import {mapState} from 'vuex'
  import Buttons from './Buttons'

    export default {
      name: "parcelTable",
      computed:mapState({
        list:state => state.list,
      }),
      components: {ParcelTr,Buttons},
    }
</script>

<style scoped>
#tbldiv{
  margin-top: 50px;
}
table{
  margin: auto;
}
</style>
