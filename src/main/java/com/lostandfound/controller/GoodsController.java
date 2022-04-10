package com.lostandfound.controller;

import com.lostandfound.pojo.Goods;
import com.lostandfound.service.GoodsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * @program: LostandFound
 * @description:
 * @author: Mr.Like
 * @create: 2022-03-19 10:57
 **/


@RestController
@Api("商品管理器")

public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    @PostMapping("/addgoodsTocar")
    @ApiOperation("添加商品到购物车")
    public void addgoodsTocar(@RequestBody Goods goods){
        goodsService.add_goods(goods);
    }

    @PostMapping("/getgoods")
    @ApiOperation("获取用户购物车里面的全部信息，这里不需要填写其他信息，只需要登录后请求就行，userid后台获取")
    public List<Goods> getuserAllGoods(HttpSession session) {
        return goodsService.queryAllgoodslistByuserId((int)session.getAttribute("loginUserId"));
    }

    @PostMapping("/deletegoods")
    @ApiOperation("删除用户购物车里的商品,这个是商品id")
    public void deletegoodsbyid(int id){
        goodsService.deletegoods(id);
    }
}