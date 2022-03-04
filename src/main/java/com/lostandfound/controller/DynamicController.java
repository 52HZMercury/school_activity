package com.lostandfound.controller;

import com.lostandfound.pojo.Dynamic;
import com.lostandfound.pojo.Comment;
import com.lostandfound.service.DynamicService;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * @program: LostandFound
 * @description:
 * @author: Mr.Like0
 * @create: 2021-11-25 16:12
 **/

@RestController
@Api("加载动态信息的控制器")
public class DynamicController {

    @Autowired
    private DynamicService dynamicService;

    @GetMapping({"/index","/"})
    @ApiOperation("一进入这个首页，就会加载数据里面的失物招领的信息")
    public List<Dynamic> loadDynamic(){
        return dynamicService.loadAllDynamic();
    }


    @PostMapping("/add")
    @ApiOperation("增加动态的控制器 " +
                  "在发布的时候，评论集合传个空值就行，user只需要传userid就行，其他两个参数可以为空，动态的id和动态发布时间也传空值")
    public void add_dynamic(@RequestBody Dynamic dynamic, HttpServletRequest request){
       dynamicService.doAddDynamic(dynamic);

        HttpSession session = request.getSession();
        session.setAttribute("uid",dynamic.getUser().getId());

        System.out.println(session.getId() +" "+session.getAttribute("uid"));

       session.setAttribute("dtext",dynamic.getDescriptiontext());
       session.setAttribute("dtag",dynamic.getTag());
    }

    @PostMapping("/releaseComment")
    @ApiOperation("发表评论控制器")
    public void add_comment(@RequestBody Comment comment){
        dynamicService.doReleaseComments(comment);
    }

    @PostMapping("/updateLikes")
    @ApiOperation("对点赞数进行更新")
    public void updatelikes(int likes , int dynamicId){
        dynamicService.updateLikes(likes,dynamicId);
    }
}
