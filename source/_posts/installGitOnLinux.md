---
title: Linux中手动安装Git
comment: false
sticky: false
categories:
  - 教程
  - Linux
  - Git
audio:
  - https://music.163.com/song?id=1387098940
date: 2024-04-02 18:59:37
tags:
  - Linux
  - Git
  - 环境搭建
---

> 之所以写这篇文章的初衷是由于本人在`CentOS7`使用`yum`无法安装到最新版本的git，通过查询[Git官网](https://git-scm.com/)得知，需下载源码进行源码编译安装。又考虑到大多数人员对于Linux一知半解，无法快速上手，故写下这篇文章，以供参考。



### 1. 下载

```sh
# 此处以V2.38.1为例
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.38.1.tar.gz
```

### 2. 安装依赖包

```sh
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel asciidoc
yum install gcc perl-ExtUtils-MakeMaker
# 之所以选择先安装依赖再删除原有'git'，是因为在安装上述依赖软件过程中，部分软件又会依赖'git'，所以在此处应先安装依赖再删除'git'
```

### 3. 删除原有git版本

```sh
yum remove git
```

### 4. 解压缩文件并移动至指定位置

```sh
# 解压缩文件
tar -zxvf git-2.38.1.tar.gz
# 将解压得到的文件夹移动到 /usr/local/soft/ 目录下
mv git-2.38.1 /usr/local/soft/
```

### 5. 编译安装

```sh
# 进入git目录
cd /usr/local/soft/git-2.38.1/
# 配置编译后的git安装位置
./configure --prefix=/usr/local/git --with-iconv=/usr/local/libiconv
# 编译
make
make install
```

### 6. 配置环境变量

```sh
# 因安装的git非系统命令，此时使用 'git --version' 命令会报错：'-bash: git command not found',故需要先配置环境变量
echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/profile
# 生效配置文件
source /etc/profile
```

### 7. 使用`git --version`命令查看最新版本

### 8. 全局配置

```sh
git config --global user.name # 配置用户名
git config --global user.email # 配置邮箱
```

