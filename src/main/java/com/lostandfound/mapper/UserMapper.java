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

    void addUser(User user);

    int addNewUerId();

    int upDateUser(User user);

    void upDateUserpassword(User user);

    int updataUsersum(int dsum,int lsum,int id);

    int deleteUser(String id);



}
