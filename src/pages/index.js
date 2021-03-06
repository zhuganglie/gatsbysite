import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="w-full mb-4 mx-auto">
    <StaticImage
      src="../images/lanke.webp"
      layout="fullWidth"
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="王质遇仙"
    />
    </div>
  
    <div className="text-center flex flex-col">
        <div className="mb-8">
    <h3>渔 樵 问 答</h3>
    <span>[明] &middot; 杨表正</span>
    </div>
    <div className="text-left md:px-4">
    <p>渔问樵曰：“子何求? ”</p>

<p>樵答渔曰：“数椽茅屋，绿树青山，时出时还; 生涯不在西方; 斧斤丁丁，云中之峦。” </p>

<p>渔又诘之：“草木逢春，生意不然不可遏; 代之为薪，生长莫达! ” </p>

<p>樵又答之曰：“木能生火，火能熟物，火与木，天下古今谁没? 况山木之为性也当生当枯; 伐之而后更夭乔，取之而后枝叶愈茂。” </p>

<p>渔乃笑曰：“因木求财，心多嗜欲; 因财发身，心必恒辱。”</p>

<p>樵曰：“昔日朱买臣未遇富贵时，携书挟卷行读之，一且高车驷马驱驰，刍荛脱迹，于子岂有不知? 我今执柯以伐柯，云龙风虎，终有会期; 云龙风虎，终有会期。” </p>

<p>樵曰：“子亦何易? ”</p>

<p>渔顾而答曰：“一竿一钓一扁舟;五湖四海，任我自在遨游; 得鱼贯柳而归，乐觥筹。”</p>

<p>樵曰：“人在世，行乐好太平，鱼在水，扬鳍鼓髡受不警; 子垂陆具，过用许极心，伤生害命何深!?”渔又曰：“不专取利抛纶饵，惟爱江山风景清。”</p>

<p>樵曰：“志不在渔垂直钓? 心无贪利坐家吟; 子今正是岩边獭，何道忘私弄月明? ”</p>

<p>渔乃喜曰：“吕望当年渭水滨，丝纶半卷海霞清; 有朝得遇文王日，载上安车赍阙京; 嘉言谠论为时法，大展鹰扬敦太平。”</p>

<p>樵击担而对曰：“子在江兮我在山，计来两物一般般; 息肩罢钓相逢话，莫把江山比等闲; 我是子非休再辩，我非子是莫虚谈; 不如得个红鳞鲤，灼火新蒸共笑颜”。</p>

<p>渔乃喜曰：“不惟萃老溪山; 还期异日得志见龙颜，投却云峰烟水业，大旱施霖雨，巨川行舟楫，衣锦而还; 叹人生能有几何欢。”</p>

</div>

</div>
  </Layout>
)

export default IndexPage
