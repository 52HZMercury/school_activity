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

    int addUser(User user);

    int upDateUser(User user);

    int deleteUser(String id);
}
