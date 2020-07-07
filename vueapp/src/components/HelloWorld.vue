<!--
 * @Description: to
 * @Autor: HuangCheng
 * @Date: 2020-07-07 11:24:43
 * @LastEditors: HuangCheng
 * @LastEditTime: 2020-07-07 15:44:37
--> 
<template>
  <div class="hello">
    <h1>登陆</h1>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="账号">
      <a-input
        v-decorator="['name', { rules: [{ required: true, message: '请输入账号!' }] }]"
      />
    </a-form-item>
    <a-form-item label="密码">
      <a-input
        type='password'
        v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        登陆
      </a-button> 没有账号？前往<router-link to="/register"> 注册 </router-link>页面
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.Axios({
            method: 'GET',
            url: 'http://localhost:3000/login?name='+values.name+"&password="+values.password,
          }).then(res => {
            console.log(res)
            if(res.data.code===200){
              this.$message.success(res.data.message)
              window.sessionStorage.setItem('userInfo',JSON.stringify(res.data.result[0]))
              this.$router.push('/main')
            } else {
              this.$message.error(res.data.message)
            }
          })
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
