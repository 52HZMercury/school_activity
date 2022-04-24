package com.lostandfound.service;

import com.lostandfound.mapper.DynamicMapper;
import com.lostandfound.mapper.UserMapper;
import com.lostandfound.pojo.Dynamic;
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

      @Autowired
      private DynamicMapper dynamicMapper;

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
         User UserIndex = userMapper.loadUserMessage(id);
         //查询该用户的全部点赞信息并相加获得该用户的点赞总数
        int likestotal = 0;
        int dynamictotal = 0;
        for (Dynamic tempdynamic:dynamicMapper.queryDynamicListByUserid(id)
             ) {
            likestotal +=   tempdynamic.getLikes();
            dynamictotal += 1;
        }
         UserIndex.setLikesSum(likestotal);
         UserIndex.setDynamicSum(dynamictotal);
         userMapper.updataUsersum(dynamictotal,likestotal,id);

         return   UserIndex;
    }




    //用户注册
    public int doreg(User user){
          userMapper.addUser(user);
          return userMapper.addNewUerId();
    }

    //用户修改个人信息
    public void doAlter(User upuser){
          userMapper.upDateUser(upuser);
    }

    public void  doAlterpassword(User upuser){
        userMapper.upDateUserpassword(upuser);
    }


    public void addheadImgPath(String path,int userId){
          userMapper.addheadImgpath(path,userId);
    }
}
