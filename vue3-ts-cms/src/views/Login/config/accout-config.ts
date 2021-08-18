const rules = {
  name: [
    {
      required: true,
      message: '',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上字母或数字',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: false,
      message: '',
      trigger: 'blur'
    },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  verification: [
    {
      required: false,
      message: '',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6}$/,
      message: '验证码必须是3位以上字母或数字',
      trigger: 'blur'
    }
  ]
}

export default rules
