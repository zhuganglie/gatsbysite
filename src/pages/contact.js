import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
      <SEO title="Page two" />
      <h2>联 系</h2>
      <hr />
<p>随便写几行联系一下呗。</p>
<form method="post" action="https://formspree.io/pyrrhonianpig@gmail.com">
<div className="flex flex-col mb-4">
    <label className="mb-2 uppercase text-sm text-grey-darkest" > 姓 名 </label>
    <input className="border focus:border-red-500 py-2 px-3 text-grey-darkest" type="text" name="name" id="name" />

  </div>

  <div className="flex flex-col mb-4">
    <label className="mb-2 uppercase text-sm text-grey-darkest" > 电 邮</label>
      <input className="border focus:border-red-500 py-2 px-3 text-grey-darkest" type="email" name="email" id="email" />

    </div>

    <div className="flex flex-col mb-4">
    <label className="mb-2 uppercase text-sm text-grey-darkest" > 短 信 </label>
      <textarea className="border focus:border-red-500 py-2 px-3 text-grey-darkest" name="message" id="message" rows="5" />

    </div>

    <button className="block shadow-lg bg-red-800 hover:bg-red-500 text-gray-200 uppercase text-sm py-1 px-3 rounded" type="submit">提 {` `}交</button>

</form>


      </Layout>
)

export default ContactPage
