package com.lostandfound.service;

import com.lostandfound.mapper.DynamicMapper;
import com.lostandfound.pojo.Dynamic;
import com.lostandfound.pojo.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: LostandFound
 * @description:
 * @author: Mr.Like
 * @create: 2021-11-25 16:21
 **/

@Service
public class DynamicService {

    @Autowired
    private DynamicMapper dynamicMapper;


    /**
     * 返回所有的动态信息
     * @return
     */
    public List<Dynamic> loadAllDynamic(){
        return dynamicMapper.queryDynamicList();
    }

    /**
     *发表动态
     */
    public void  doAddDynamic(Dynamic dymaic){
       dynamicMapper.addDynamic(dymaic);
    }

    /**
     * 发表评论
     * @param comment
     */
    public void doReleaseComments(Comment comment){
        dynamicMapper.releaseComments(comment);
    }

    public void updateLikes(int likes,int id){
        dynamicMapper.upDateLikes(likes,id);
    }

    public void addImg(String classpath,int uid,String dtext,String dtag){
        dynamicMapper.addDynamicImgclasspath(classpath,uid,dtext,dtag);
    }

    public List<Dynamic> loadtagDynamic(String tag){
        return dynamicMapper.loadDynamicByTag(tag);
    }


    public void updateDynamic(Dynamic dynamic){
         dynamic.setId(dynamicMapper.addNewDId());
         dynamicMapper.updatedynamic(dynamic);
    }

    public void doDeleteDynamic(int id){
        dynamicMapper.deleteDynamic(id);
    }

    public void doDeleteComment(int id){
        dynamicMapper.deleteComment(id);
    }

    public int dogetCommentUserID(int Commentid){
        return dynamicMapper.getCommentUserID(Commentid);
    }

}
