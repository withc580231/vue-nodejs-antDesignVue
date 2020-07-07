<!--
 * @Description: zhuce
 * @Autor: HuangCheng
 * @Date: 2020-07-07 11:30:36
 * @LastEditors: HuangCheng
 * @LastEditTime: 2020-07-07 12:02:54
--> 
<template>
  <div>
    <h1>注册</h1>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <a-form-item label="账号">
        <a-input
          placeholder="请输入账号"
          v-decorator="['name', { rules: [{ required: true, message: '请输入账号!' }] }]"
        />
      </a-form-item>
      <a-form-item label="密码">
        <a-input
          placeholder="请输入密码"
          type='password'
          v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
        />
      </a-form-item>
      <a-form-item label="电话">
        <a-input
          placeholder="请输入联系电话"
          v-decorator="['tel', { rules: [{ required: true, message: '请输入联系电话!' }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          注册
        </a-button> 已有账号？前往<router-link to="/"> 登陆 </router-link>页面
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.Axios({
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: {
              ...values
            }
          }).then(res => {
            console.log(res)
            if (res.data.code===200) {
              this.$message.success(res.data.message)
              this.$router.push('/')
            } else {
              this.$message.error(res.data.message)
            }
          })
        }
      });
    },
  },
};
</script>
