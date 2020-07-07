/*
 * @Description: login
 * @Autor: HuangCheng
 * @Date: 2020-07-06 11:08:51
 * @LastEditors: HuangCheng
 * @LastEditTime: 2020-07-07 15:56:21
 */ 
var express = require('express');
var router = express.Router();
var pool = require('./pool.js');

router.get('/login', function(req, res, next) {
  let name = req.query.name;
  let password = req.query.password;
  if (name==='') {
    res.send({code:400,message:'用户名不能为空!'})
    return
  }
  if (password==='') {
    res.send({code:400,message:'密码不能为空!'})
    return
  }
  var sql = 'select * from user_login where user_name=? and user_pwd=?'
  pool.query(sql,[name,password],(err,result)=>{
    if(err) throw err;
    if(result.length>0) {
      res.send({code:200,message:'登陆成功',result:result})
    } else {
      res.send({code:400,message:'登陆失败，请检查用户名或密码是否正确'})
    }
  })
});
router.post('/register',(req,res)=> {
  let name = req.body.name;
  let password = req.body.password;
  let tel = req.body.tel;
  if (name==='') {
    res.send({code:400,message:'用户名不能为空!'})
    return
  }
  if (password==='') {
    res.send({code:400,message:'密码不能为空!'})
    return
  }
  if (tel==='') {
    res.send({code:400,message:'电话号码不能为空!'})
    return
  }
  let sql = 'insert into user_login values(null,?,?,?)'
  pool.query(sql,[name,password,tel],(err,result)=>{
    if (err) throw err;
    if (result.affectedRows>0){
      res.send({code:200,message:'注册成功',result:result})
    } else {
      res.send({code:400,message:'注册失败',result:result})
    }
  })
})
router.post('/update',(req,res)=> {
  let name = req.body.name;
  let password = req.body.password;
  let tel = req.body.tel;
  if (name==='') {
    res.send({code:400,message:'用户名不能为空!'})
    return
  }
  if (password==='') {
    res.send({code:400,message:'密码不能为空!'})
    return
  }
  if (tel==='') {
    res.send({code:400,message:'电话号码不能为空!'})
    return
  }
  let sql = 'update user_login set user_name=?,user_pwd=?,user_tel=?'
  pool.query(sql,[name,password,tel],(err,result)=>{
    if (err) throw err;
    if (result.affectedRows>0){
      res.send({code:200,message:'修改成功',result:result})
    } else {
      res.send({code:400,message:'修改失败',result:result})
    }
  })
})
router.post('/delete',(req,res) => {
  let id = req.body.id;
  let sql = 'delete from user_login where id = ?'
  pool.query(sql,[id],(err,result)=>{
    if (err) throw err;
    if (result.affectedRows>0){
      res.send({code:200,message:'删除成功',result:result})
    } else {
      res.send({code:400,message:'删除失败',result:result})
    }
  })
})

module.exports = router;
