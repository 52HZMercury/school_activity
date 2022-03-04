package com.lostandfound.mapper;


import com.lostandfound.pojo.Dynamic;
import com.lostandfound.pojo.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DynamicMapper {

    //加载全部的动态信息
    List<Dynamic> queryDynamicList();

    //发布动态
    void addDynamic(Dynamic dymaic);

    //添加发表的评论
    void releaseComments(Comment comment);

    void upDateLikes(int likes,int id);

    void addDynamicImgclasspath(String classpath,int uid,String dtext,String dtag);

}
