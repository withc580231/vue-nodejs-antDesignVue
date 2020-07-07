<!--
 * @Description: zhuce
 * @Autor: HuangCheng
 * @Date: 2020-07-07 11:30:36
 * @LastEditors: HuangCheng
 * @LastEditTime: 2020-07-07 16:04:57
--> 
<template>
  <div>
    <h1>修改账号信息</h1>
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
          修改
        </a-button>
        <a-button type="danger" style="margin-left:20px">
          <a-popconfirm
            title="确认注销该账号?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirm"
            @cancel="cancel"
          >
            <a href="#">注销</a>
          </a-popconfirm>
        </a-button>
        <a-button @click="returnPage" style="margin-left:20px">返回</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      userInfo: ''
    };
  },
  created () {
    this.userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'))
    console.log(this.userInfo)
  },
  mounted () {
    setTimeout(() => {
      this.form.setFieldsValue({
        name: this.userInfo.user_name,
        password: this.userInfo.user_pwd,
        tel: this.userInfo.user_tel
      })
    },0)
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.Axios({
            method: 'POST',
            url: 'http://localhost:3000/update',
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
    confirm(e) {
      this.Axios({
        method: 'POST',
        url: 'http://localhost:3000/delete',
        data: {
          id: this.userInfo.id
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
    },
    cancel(e) {
    },
    returnPage() {
      this.$router.push('/main')
    }
  },
};
</script>
