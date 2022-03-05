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


      public User doLogin(int id ,String password) {

        User user = userMapper.loadUserByUserId(id);
        if (user == null || !user.getPassword().equals(password)) {
            return null;
        }
        return user;

    }
}
