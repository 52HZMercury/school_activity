package com.lostandfound.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @program: LostandFound
 * @description:
 * @author: Mr.Like
 * @create: 2021-11-23 10:24
 **/
@Data
@AllArgsConstructor
@NoArgsConstructor

public class User {
    private String name;
    private int id;
    private String password;
    private String headImg;
}
