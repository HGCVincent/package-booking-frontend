<!--<template>-->
  <!--<a-form :form="form">-->
    <!--<a-form-item-->
      <!--:label-col="formItemLayout.labelCol"-->
      <!--:wrapper-col="formItemLayout.wrapperCol"-->
      <!--label="Name"-->
    <!--&gt;-->
      <!--<a-input-->
        <!--v-decorator="[-->
          <!--'waybillNumber',-->
          <!--{rules: [{ required: true, message: '请输入你的运单号' }]}-->
        <!--]"-->
        <!--placeholder="请输入你的运单号"-->
      <!--/>-->
    <!--</a-form-item>-->
    <!--<a-form-item-->
      <!--:label-col="formItemLayout.labelCol"-->
      <!--:wrapper-col="formItemLayout.wrapperCol"-->
      <!--label="取件时间"-->
    <!--&gt;-->
      <!--<a-time-picker use12Hours format="h:mm a" @change="onChange" />-->
    <!--</a-form-item>-->
    <!--<a-form-item-->
      <!--:label-col="formTailLayout.labelCol"-->
      <!--:wrapper-col="formTailLayout.wrapperCol"-->
    <!--&gt;-->
      <!--<a-checkbox-->
        <!--:checked="checkNick"-->
        <!--@change="handleChange"-->
      <!--&gt;-->
        <!--Nickname is required-->
      <!--</a-checkbox>-->
    <!--</a-form-item>-->
    <!--<a-form-item-->
      <!--:label-col="formTailLayout.labelCol"-->
      <!--:wrapper-col="formTailLayout.wrapperCol"-->
    <!--&gt;-->
      <!--<a-button-->
        <!--type="primary"-->
        <!--@click="check"-->
      <!--&gt;-->
        <!--Check-->
      <!--</a-button>-->
    <!--</a-form-item>-->
  <!--</a-form>-->
<!--</template>-->

<!--<script>-->
  <!--const formItemLayout = {-->
    <!--labelCol: { span: 4 },-->
    <!--wrapperCol: { span: 8 },-->
  <!--};-->
  <!--const formTailLayout = {-->
    <!--labelCol: { span: 4 },-->
    <!--wrapperCol: { span: 8, offset: 4 },-->
  <!--};-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--time:'',-->
        <!--checkNick: false,-->
        <!--formItemLayout,-->
        <!--formTailLayout,-->
        <!--form: this.$form.createForm(this),-->
      <!--};-->
    <!--},-->
    <!--methods: {-->
      <!--check  () {-->
        <!--this.form.validateFields(-->
          <!--(err) => {-->
            <!--if (!err) {-->
              <!--console.info('success');-->
            <!--}-->
          <!--},-->
        <!--);-->
      <!--},-->
      <!--handleChange  (e) {-->
        <!--this.checkNick = e.target.checked;-->
        <!--this.$nextTick(() => {-->
          <!--this.form.validateFields(['nickname'], { force: true });-->
        <!--});-->
      <!--},-->
      <!--onChange(time, timeString){-->
        <!--this.time = time-->
      <!--},-->
    <!--},-->
  <!--};-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div>
    <p>运单号：<input type="text" v-model="orderId"></p>
    <p>预约时间：</p>
    <a-date-picker
      format="YYYY-MM-DD" @change="getChange"/>
    <a-time-picker use24Hours @change="onChange"/>
    <button @click="bookFetch">确定</button>
    <button @click="goMain">取消</button>

  </div>
</template>

<script>
  export default {
    name: 'Book',
    data () {
      return {
        timeString: '',
        date: '',
        orderId:''
      }
    },
    methods: {
      getChange (date,dateString) {
        this.date = dateString
      },
      onChange (time,timeString) {
        this.timeString = timeString
      },
      bookFetch(){
        let pkg = {
          id : this.orderId,
          time : `${this.date} ${this.timeString} `
        }
        this.$store.dispatch('updateParcelByPost',pkg)
        this.$router.push("/")
      },
      goMain(){
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>
</style>
