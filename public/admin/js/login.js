$(function(){
  // 登录功能
  // 1表单的校验
  $('form').bootstrapValidator({
    fields:{
      username:{
        validators:{
          notEmpty: {
            message: '用户名不能为空'
          },
          stringLength: {
            min: 3,
            max: 12,
            message: '用户名长度必须在3到12之间'
          }
        
        }
      },
      password:{
        validators:{
          notEmpty: {
            message: '密码不能为空'
          },
          stringLength: {
            min: 6,
            max: 12,
            message: '密码长度必须在6到12之间'
          }
        
        }
      }
    },
    feedbackIcons: {
    valid: 'glyphicon glyphicon-plane',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  })
})