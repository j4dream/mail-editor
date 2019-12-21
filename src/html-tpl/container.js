// 字符串模板，你可以使用你喜欢的渲染引擎，或者针对不同的客户端生成相应的代码
// 传统 EDM 为了适应更多客户端（outlook, qq, 163, yahoo, gmail各有差异），
// 适配好各个客户端是件工作量非常大的事情，比如 outlook 2016 各个子版本也有着
// 微少的差异，如果能提前知道客户群体主要使用什么邮件客户端，就能节省非常多的时间。
// 兼容性代码带来的另外一个问题就是邮件体积过大，一封简单的邮件可能大 100K，
// Gmail 超过 142KB，就会强行切断后面的内容，甚至露出 table><p "font-size"..
// 这些代码。
export default 
`
<div class="container" id="content" tabindex="-1">
  <%=container%>
</div>
`;