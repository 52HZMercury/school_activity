package com.lostandfound.mapper;


import com.lostandfound.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {

    List<User> queryUserList();

    User queryUserListById(String id);

    User loadUserByUserId(int id);

    User loadUserMessage(int id);//查询用户的信息

    int addUser(User user);

    int upDateUser(User user);

    int deleteUser(String id);


}
