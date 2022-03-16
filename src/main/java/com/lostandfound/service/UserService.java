package com.lostandfound.service;

import com.lostandfound.mapper.UserMapper;
import com.lostandfound.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @program: LostandFound
 * @description:
 * @author: Mr.Like
 * @create: 2021-11-23 10:35
 **/
@Service
public class UserService {

      @Autowired
      private UserMapper userMapper;

      //用户登录
      public User doLogin(int id ,String password) {

        User user = userMapper.loadUserByUserId(id);
        if (user == null || !user.getPassword().equals(password)) {
            return null;
        }

        return user;

    }

    //用户自己的相关信息
    public User loadUsermessage(int id){
           return   userMapper.loadUserMessage(id);
    }
}
