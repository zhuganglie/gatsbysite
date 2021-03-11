import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h2>关 于</h2>
    <h4>嗨，你好！欢迎来到我的小站。 </h4> 
    <p>我，网名猪刚烈，外号一灯，是一名学习设计师，现服务于一家社区培训中心。</p>
    <p>生活中，我是一个乐天派。我相信办法总比问题多，相信没有什么过不去的坎儿，相信事情总会向好的方向转化。遇到问题的时候，别人急得跳脚，我却能淡定自若，表现得跟没事儿一样。因为这样的性格，常常被某个人骂“没心没肺”。下面这张图画出了我这种性格背后的逻辑。</p>
    <div className="w-full md:w-1/2 block ml-auto mr-auto mb-4">
    <StaticImage
     src="../images/attitude.png"
     alt="生活态度"
     placeholder="blurred"
     layout="constrained"
     width={400}
   />
</div>
     <p>我对未知充满好奇，因而特别喜欢读书学习。书店是常去的地方。刚工作那会儿，收入微薄，生活捉襟见肘，但每月仍会拿出工资的七分之一来购买书籍。到我辞职的时候，家里的书房都快变成迷你图书馆了。我阅读的范围基本局限于哲学、社会科学和科普。《红楼梦》读几行就想睡觉，《自杀论》却可以读通宵而不知疲倦。得益于阅读，我能清楚地理解抽象的哲学概念，也能处理棘手的组织管理问题，还能欣赏诗词歌赋中蕴涵的意境。我是读者，也是作者，发表过若干章节、译作，和论文。我的作品看的人不多，但还算有见解，不会让读者感觉是在浪费时间。</p>

    <p>我兴趣广泛，喜欢远足，喜欢骑脚踏车，喜欢听古典音乐，喜欢品茶，喜欢做美食......。我最大的嗜好是下围棋。从大学一年级开始一直下到现在。围棋让我明白了不少道理。比如，什么是高手？高手和低手的根本区别在于：低手常以为自己最厉害，而高手则相信对手更高明。</p>
    
    <p>最近, 我对网站开发产生了浓厚的兴趣，于是就开始了 HTML、CSS 和 Javascript 的学习之旅。你现在正在浏览的这个网站就是这次学习的一个初步成果，它是基于 <a href="https://gatsbyjs.com" target="_blank">Gatsby</a> 和 <a href="https://tailwindcss.com" target="_blank">Tailwindcss</a> 技术构建的。怎么样？看上去还不错吧？<span role="img" aria-label="Smile">&#128522;</span> 
    </p>
  </Layout>
)

export default AboutPage
