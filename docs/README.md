---
sidebar: auto
---

<p align="center">
    <img src="https://i.imgur.com/SSzDiLJ.png" alt="eebook" width="100">
</p>
<h1 align="center" class="logo">EEBook</h1>

> EEBook 是一个将网址转换成 EPub 电子书的工具。

# [@EEBook](https://t.me/EEBook)

EEBook 正在进行内测，计划逐步开放使用。目前的交互形式是 Telegram 机器人。如果还有名额的话，通过[@EEBook](https://t.me/EEBook)可以使用，如果名额已满，[@EEBook](https://t.me/EEBook)会给出提示信息。

## demo

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/-RgVVXdJCOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

## 说明

* 电子书版权不属于 EEBook，EEBook 只是提供一个运行容器的环境，这些关键的代码都是开源的，版权属于原站点，绝大部分属于 CC 协议，站方如有疑问可以联系 [0nujeh@gmail.com](mailto:0nujeh@gmail.com)
* 默认情况下，24小时内最多进行一次生成 EPub 电子书的操作。
* 内测期间，EEBook 不承诺保存您的数据，制作电子书完成后请尽快下载
* 目前 API 还不稳定，可能会有不兼容的修改

## 全局参数

这些变量在提交时可以进行重写。下面有图片示例。

|        变量         |                          描述                          |
| :-----------------: | :----------------------------------------------------: |
|    CONTENT_SIZE     | 文章数量，如果数量太多，文件内容太多，有可能会发送失败 |
| CONTENT_IS_MARKDOWN |    文章内容是 Markdown 格式（一般情况下是默认选项）    |


## 支持的网站

### [github](https://github.com)

#### issues
[源代码](https://github.com/knarfeh/githubissues2ebook)


参数： 

|        变量         |                        描述                        |
| :-----------------: | :------------------------------------------------: |
|    GITHUB_TOKEN     |                     **必填参数**，只需申请一个可读权限的 Token                     |
|    QUERY_STRING     | all, open, closed 分别表示所有，打开，关闭的 Issue |
| CONTENT_IS_MARKDOWN |  文章内容是 Markdown 格式（一般情况下是默认选项）  |

命令：

`/submit https://github.com/olebedev/go-starter-kit/issues GITHUB_TOKEN 67b96b68673f5091254ecede37b55bbce9f9ff01 CONTENT_IS_MARKDOWN true QUERY_STRING state=open`

示例：

![github_issue_cmd](https://i.imgur.com/OotnJUH.png)  

![github_issue_epub](https://i.imgur.com/fLc1VQz.png)

### 知乎
目前只支持知乎专栏。

#### [专栏](https://zhuanlan.zhihu.com)
[源代码](https://github.com/knarfeh/zhihu2ebook)

命令：

`/submit https://zhuanlan.zhihu.com/cloud-native`

示例：

![zhihu_zhuanlan_cmd](https://i.imgur.com/zoKHN8b.png)  

![zhihu_zhuanlan_epub](https://i.imgur.com/e1DVFpj.png)

### 博客

#### [阮一峰的博客](http://www.ruanyifeng.com/blog/)
[源代码](https://github.com/knarfeh/ruanyifeng2ebook)

命令：

`/submit http://www.ruanyifeng.com/blog/computer/`

示例：

![ruanyifeng_cmd](https://i.imgur.com/XF0P3sN.png)  

![ruanyifeng_epub](https://i.imgur.com/lnRCbcd.png)

#### [Kubernetes blog](https://kubernetes.io/blog/)
[源代码](https://github.com/knarfeh/kubernetes2ebook)

命令：
`/submit https://kubernetes.io/blog/`

示例：

![k8s_cmd](https://i.imgur.com/I1MpNAS.png)  

![k8s_epub](https://i.imgur.com/4diSgqi.png)

#### [aaronsw](http://www.aaronsw.com/weblog/fullarchive)
[源代码](https://github.com/knarfeh/aaronsw2ebook)

命令：

`/submit http://www.aaronsw.com/weblog/fullarchive CONTENT_SIZE 420`

示例：

![aaronsw_cmd](https://i.imgur.com/jyP9GTN.png)  

![aaronsw_epub](https://i.imgur.com/9iELGEN.png)

### 论坛

#### [ethfans](https://ethfans.org/)

[源代码](https://github.com/knarfeh/ethfans2ebook)  

命令：


`/submit https://ethfans.org/`

示例：


![ethfans_cmd](https://i.imgur.com/Fqp1Wz0.png)  

![ethfans_epub](https://i.imgur.com/CwMN345.png)

## 命令

#### `/submit`

提交一个配置（保存配置，可以重复使用）。
##### 示例

#### `/list_config`

列出所有的提交。

#### `/list_job`

列出所有的 job

#### `/list_book`

列出所有已经生成的 EPub 文件。

## [网站汇总](https://eebook.github.io/catalog/)

## 实现细节

### 代码库

* [eebook](https://github.com/eebook/eebook), 主仓库，EEBook 的文档。
* [catalog](https://github.com/eebook/catalog)，支持的网站的汇总。
* [hlgd](https://github.com/eebook/hlgd)，解决 URL 的匹配问题。
* [vugell](https://github.com/eebook/vugell), 将 ES 中的文本数据转换成 EPub 电子书。
* [gryu](https://github.com/eebook/gryu)，API 网关，Telegram 机器人相关的代码也在其中。


### 编程语言/框架

* [Golang](https://golang.org/)
* [Node.js](http://nodejs.org)
* [Flask](http://flask.pocoo.org/)

### 开源软件

* [Minio](https://www.minio.io/)
* [Elasticsearch](https://www.elastic.co/products/elasticsearch)
* [Redis](https://redis.io/)
* [PostgreSQL](https://www.postgresql.org/)
