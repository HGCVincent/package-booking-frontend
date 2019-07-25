<template>
  <a-form :form="form">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="运单号"
    >
      <a-input
        v-decorator="[
          'waybillNumber',
          {rules: [{ required: true, message: '请输入运单号' }]}
        ]"
        placeholder="请输入运单号"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="收件人"
    >
      <a-input
        v-decorator="[
          'recipient',
          {rules: [{ required: true, message: '请输入收件人' }]}
        ]"
        placeholder="请输入收件人"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="电话"
    >
      <a-input
        v-decorator="[
          'phoneNumber',
          {rules: [{ required: true, message: '请输入收件人电话' }]}
        ]"
        placeholder="请输入收件人电话"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="重量"
    >
      <a-input
        v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入重量' }]}
        ]"
        placeholder="请输入重量"
      />
    </a-form-item>
    <a-form-item
      :label-col="formTailLayout.labelCol"
      :wrapper-col="formTailLayout.wrapperCol"
    >
      <a-button
        type="primary"
        @click="check"
      >
        添加
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };
  export default {
    data () {
      return {
        checkNick: false,
        formItemLayout,
        formTailLayout,
        form: this.$form.createForm(this),
      };
    },
    methods: {
      check  () {
        this.form.validateFields(
          (err) => {
            if (!err) {
              this.$store.dispatch('addParcel', {
                "waybillNumber":this.form.getFieldValue("waybillNumber"),
                "recipient": this.form.getFieldValue("recipient"),
                "phoneNumber": this.form.getFieldValue("phoneNumber"),
                "status": "未取件",
                "time": null,
              })
              console.info('success');
              this.$router.push("/");
            }
          },
        );
      },
    },
  };
</script>

<style scoped>

</style>
