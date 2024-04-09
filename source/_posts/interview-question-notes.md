---
title: interview-question-notes
comment: false
sticky: false
categories:
  - Java
  - 面试
audio:
  - https://music.163.com/song?id=1387098940
date: 2024-04-09 20:39:58
tags:
  - Java
  - 面试
---

## Java基础

### 1. `==`在不同情况下的使用

> 代码如下

```java
public class Main {
    public static void main(String[] args) {
        String a = "aaa";
        String b = new String("aaa");
        Integer c = 100;
        Integer d = 100;
        Integer e = 300;
        Integer f = 300;
        
        System.out.println(a=="aaa"); // true
        System.out.println(b=="aaa"); // false
        System.out.println(c==d); // true
        System.out.println(e==f); // false
    }
}
```

> 分析

首先，我们应该知道`==`对于基本类型和引用类型所起到的作用是不同的：

- 对基本类型来说：比较的就是值是否相同；
- 对引用类型来说：比较的就是地址值是否相同，也就是对象的内存地址

在上述代码中，`String`和`Integer`均属于引用类型

