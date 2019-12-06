$(function(){
  // 登录功能
  // 1表单的校验
  var $form=$('form')
  $form.bootstrapValidator({
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
          },
          callback:{
            message: '用户名不存在'
           
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
          },
          callback:{
            message: '密码错误'
           
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
  // 2表单重置功能
  $('.btn-reset').on('click',function(){
    $form.data('bootstrapValidator').resetForm(true);
  })
   // 给登录按钮注册电机事件
  
   $form.on('success.form.bv', function (e) {
    e.preventDefault();
    $.ajax({
      type:'post',
      url:'/employee/employeeLogin',
      data:$form.serialize(),
      beforeSend:function(){
        NProgress.start()
      },
      success:function(info){
        console.log(info);
        
        if(info.success){
          location.href="index.html"
        }else if(info.error===1000){
          $form.data('bootstrapValidator').updateStatus('username','INVALID','callback')
        }else{
          $form.data('bootstrapValidator').updateStatus('password','INVALID','callback')
          
        }
        
      },
      complete:function(){
        NProgress.start()
        
      }
    })
});
})