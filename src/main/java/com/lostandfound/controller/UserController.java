package com.lostandfound.controller;


import com.lostandfound.pojo.User;
import com.lostandfound.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    @ApiOperation("首先要登录，然后才会有对应的登录信息，才可以进行这一步的操作")
    public User loadusermessage(HttpSession session){
          return userService.loadUsermessage((int)session.getAttribute("loginUserId"));
    }


}
