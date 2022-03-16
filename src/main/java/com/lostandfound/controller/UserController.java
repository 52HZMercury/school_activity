package com.lostandfound.controller;


import com.lostandfound.pojo.User;
import com.lostandfound.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * @program: LostandFound
 * @description: 用户查询自己信息的controller
 * @author: Mr.Like
 * @create: 2022-03-16 19:36
 **/

@RestController
@Api("用户在个人界面查看自己的相关信息的接口")
public class UserController {


    @Autowired
    private UserService userService;

    @GetMapping({"/userindex"})
    @ApiOperation("一进入这个首页，就会加载数据里面的失物招领的信息")
    public User loadusermessage(HttpSession session){
          return userService.loadUsermessage((int)session.getAttribute("loginUserId"));
    }



}
