var container = _(".container-goodslist");
_ajax("./json/productjson.json")
.then(function(res){
    //   console.log(JSON.parse(res).data);
      // 获取商品列表;
      var goodsJSON =JSON.parse(res).data;
      randomPage(goodsJSON);
})

// 渲染页面函数;
function randomPage(json){
      var html = "";
      // 根据比例计算图片高度;
      json.forEach(function(ele){
            console.log(ele);
            html +=`<div class="goods-box">
                        <div class="good-image">
                            <img src="${ele.image}" alt="">
                        </div>
                        <h4>${ele.title}</h4>
                        <p>${ele.figure}</p>
                        <span>${ele.moneyone}</span>
                        <div class="wrapper">
                            <a href="" type="button" class="btn">加入购物车</a>
                            <a href="" type="button" class="btn">立即购买</a>
                        </div>
                    </div>`
      });
      container.innerHTML += html;
      return html;
}