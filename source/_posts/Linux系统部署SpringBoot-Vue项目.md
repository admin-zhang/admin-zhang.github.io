---
title: Linux系统部署SpringBoot+Vue项目
comment: true
sticky: false
categories:
  - 教程
  - Java
  - 项目部署
audio:
  - https://music.163.com/song?id=1387098940
date: 2024-04-02 12:08:17
tags:
  - java
  - SpringBoot
  - Vue
  - Linux
  - 前后端分离
---

## 一、 环境搭建

> 本篇所有软件均安装于`/usr/local/soft`目录中，以方便管理，您可自行选择其它目录，或与本篇所使用的目录保持一致，若您选择与本篇中目录保持一致，可先行通过`mkdir -p /usr/local/soft`命令创建该目录

1. JDK（此处以`Oracle JDK 11`示例，如需安装`OpenJDK`的可自行百度）

   1. 下载

      1. [官网下载](https://www.oracle.com/cn/java/technologies/downloads/#java11)
      2. 网盘下载

   2. 将下载好的文件上传至服务器中（如：`/home`中）

   3. 解压缩文件并移动至指定位置

      ```sh
      # 解压缩文件
      tar -zxvf /home/jdk-11.0.22_linux-x64_bin.tar
      # 将解压得到的文件夹移动到 /usr/local/soft/ 目录下
      mv jdk-11.0.22 /usr/local/soft/
      ```

   4. 配置环境变量

      1. 编辑`/etc/profile`文件

         ```sh
         vim /etc/profile
         ```

      2. 在文件末尾添加如下内容

         ```sh
         export JAVA_HOME=/usr/local/soft/jdk-11.0.22
         export CLASSPATH=.:${JAVA_HOME}/lib
         export PATH=${JAVA_HOME}/bin:$PATH
         ```

      3. 让配置文件生效

         ```sh
         source /etc/profile
         ```

   5. 验证（使用如下两个命令）

      1. `java -version`
      2. `javac`

2. Maven

   1. 下载

      ```sh
      # 若失效，请前往官网获取最新版本地址
      wget https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz
      ```

   2. 解压缩文件并移动至指定位置

      ```sh
      # 解压缩文件
      tar -zxvf apache-maven-3.9.6-bin.tar.gz
      # 将解压得到的文件夹移动到 /usr/local/soft/ 目录下
      mv apache-maven-3.9.6 /usr/local/soft
      ```

   3. 配置环境变量

      1. 编辑`/etc/profile`文件

         ```sh
         vi /etc/profile
         ```

      2. 在文件末尾添加如下内容

         ```sh
         # maven版本号与自己下载的需要对应
         export MAVEN_HOME=/usr/local/soft/apache-maven-3.9.6
         export PATH=$MAVEN_HOME/bin:$PATH 
         ```

      3. 让配置文件生效

         ```sh
         source /etc/profile
         ```

   4. 验证（使用`mvn -v`命令）

      

3. MySQL

4. Redis

   1. 下载

      ```sh
      wget https://download.redis.io/releases/redis-6.2.11.tar.gz?_gl=1*v51bgf*_ga*Mzk3NDcyMDQuMTY3NjkwMzM3Mw..*_ga_8BKGRQKRPV*MTY4MDc4Nzc1Mi4zLjEuMTY4MDc4Nzc4Ni4yNi4wLjA.
      ```

   2. 安装

      1. 解压缩文件并移动至指定位置

         ```sh
         # 解压缩文件
         tar -zxvf /home/redis-6.2.11.tar.gz
         # 将解压得到的文件夹移动到 /usr/local/soft/ 目录下
         mv redis-6.2.11 /usr/local/soft/
         ```

      2. 编译安装

         ```sh
         # 进入redis目录
         cd /usr/local/soft/redis-6.2.11/
         # 编译
         make
         cd src
         make install PREFIX=/usr/local/soft/redis-6.2.11
         ```

      3. 移动配置文件到安装目录下

         ```sh
         cd ..
         mkdir /usr/local/soft/redis-6.2.11/etc
         cp redis.conf ./etc/redis.conf
         ```

      4. 配置`redis`为后台启动

         ```sh
         vim /usr/local/soft/redis-6.2.11/etc/redis.conf //将daemonize no 改成daemonize yes
         ```

      5. 将`redis`加入到开机启动

         1. 编辑`/etc/rc.local`文件

            ```shell
            vim /etc/rc.local
            ```

         2. 添加如下内容

            ```sh
            /usr/local/soft/redis-6.2.11/bin/redis-server /usr/local/soft/redis-6.2.11/etc/redis.conf
            ```

   3. 开启`redis`

      ```sh
      /usr/local/soft/redis-6.2.11/bin/redis-server /usr/local/soft/redis-6.2.11/etc/redis.conf
      ```

   4. 将`redis-cli`,`redis-server`拷贝到`bin`下，让`redis-cli`指令可以在任意目录下直接使用

      ```sh
      cp /usr/local/soft/redis-6.2.11/bin/redis-server /usr/local/bin/
      cp /usr/local/soft/redis-6.2.11/bin/redis-cli /usr/local/bin/
      ```

   5. 设置`redis`密码

      ```sh
      a.运行命令：redis-cli
      b.查看现有的redis密码(可选操作，可以没有)
      　　运行命令：config get requirepass
      c.设置redis密码
          运行命令：config set requirepass ****(****为你要设置的密码)，设置成功的话会返回‘OK’字样
      d.测试连接
      　　重启redis服务
      　　//（redis-cli -h 127.0.0.1 -p 6379 -a ****（****为你设置的密码））
      　　输入 redis-cli 进入命令模式，使用 auth '*****' （****为你设置的密码）登陆　　
      ```

   6. 配置外网访问

      ```sh
      a.配置防火墙:  **firewall-cmd --zone=public --add-port=6379/tcp --permanent**（开放**6379**端口）
      
      **systemctl restart firewalld**（重启防火墙以使配置即时生效）
      
      查看系统所有开放的端口：firewall-cmd --zone=public --list-ports
      
      b.此时 虽然防火墙开放了6379端口，但是外网还是无法访问的，因为redis监听的是127.0.0.1：6379，并不监听外网的请求。
      
      （一）把文件夹目录里的redis.conf配置文件里的bind 127.0.0.1前面加'#'注释掉
      
      （二）命令：redis-cli连接到redis后，通过 config get  daemonize和config get  protected-mode 是不是都为no，如果不是，就用config set 配置名 属性 改为no。
      ```

   7. 设置开机启动

      1. 在`/etc`下新建`redis`目录

         ```shell
         mkdir /etc/redis
         ```

      2. 复制配置文件，并重命名为`6379.conf`

         ```shell
         cp /usr/local/soft/redis-6.2.11/etc/redis.conf /etc/redis/6379.conf
         ```

      3. 复制启动脚本

         ```shell
         cp /usr/local/soft/redis-6.2.11/utils/redis_init_script /etc/init.d/redis
         ```

      4. 执行自启动命令

         ```shell
         cd /etc/init.d/
         chkconfig redis on
         ```

      5. 启动`redis`

         ```sh
         # 打开redis命令:
         service redis start
         
         # 关闭redis命令:
         service redis stop
         ```

5. Node.js

6. Nginx

   1. 软件下载

      ```sh
      wget https://nginx.org/download/nginx-1.22.1.tar.gz
      ```

   2. 解压缩并移动至指定位置（例：`/usr/local/soft/`）

      ```sh
      #解压下载的nginx压缩包
      tar -zxvf nginx-1.22.1.tar.gz
      #将解压得到的文件夹移动到 /usr/local/soft/ 目录下
      mv nginx-1.22.1 /usr/local/soft/
      ```

   3. 安装

      ```sh
      #进入nginx目录
      cd /usr/local/soft/nginx-1.22.1/
      #执行命令
      ./configure
      # 若出现./configure: error: the HTTP rewrite module requires the PCRE library.这一提示，说明我们没有安装对应的依赖包，需要先安装如下依赖包。
      yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
      #将上述依赖安装完毕之后，再次执行./configure
      ./configure
      #执行make命令进行编译，然后再执行make install命令安装
      make
      make install
      ```

   4. 启动nginx

      ```sh
      /usr/local/nginx/sbin/nginx
      ```

   5. 测试

      1. 查看`nginx`进程，使用`ps -ef | grep nginx`命令可查看`nginx`进程运行状态

         ![image-20240401212111705](https://gitee.com/admin-zhang/pic/raw/master/202404012121742.png)

      2. 通过`ip`+端口号访问（如：`127.0.0.1:80`，注：nginx默认配置端口号为80）

      ![image-20240401211324219](https://gitee.com/admin-zhang/pic/raw/master/202404012113335.png)

   6. 注意事项

      1. 提前安装好所需的依赖
      2. `nginx`默认配置端口号为80，如需更改，可通过修改`nginx.conf`文件中的`listen`值，文件位于`nginx`安装目录下`conf`文件夹中，如：`/usr/local/soft/nginx-1.22.1/conf`

      ![image-20240401211946869](https://gitee.com/admin-zhang/pic/raw/master/202404012119951.png)

