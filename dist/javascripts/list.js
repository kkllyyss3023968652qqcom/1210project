// 瀑布流--------------------------------
var container = _(".container-goodslist2");

var GLOBAL = {
    // 可视区的高度;
    ch : document.documentElement.clientHeight,
    // 是否在加载过程之中
    loading_flag : false
}
_ajax("../json/productjson.json")
.then(function(res){
    //   console.log(JSON.parse(res).data);
      // 获取商品列表;
      var goodsJSON =JSON.parse(res).data;
      randomPage(goodsJSON);
      eleSort(container.children);
})
// 渲染页面函数;
function randomPage(json){
      var html = "";
      json.forEach(function(ele){
            html +=`<div class="goods-box">
                        <div class="good-image">
                            <a href=""> <img src="${ele.image}" alt=""></a>
                        </div>
                        <h4>${ele.title}</h4>
                        <p>${ele.figure}</p>
                        <span>${ele.moneyone}</span>
                        <div class="wrapper">
                            <button class="btn"  data-iid="${ele.iid}">加入购物车</button>
                            <button class="btn" >立即购买</button>
                        </div>
                    </div>`
      });
      container.innerHTML += html;
      return html;
}
function eleSort(eles){
    //标准数组
    var heightArray=[];
    eles=_slice(eles);
    eles.forEach(function(ele,index){
          if(index <= 3){
                //建立标准
                heightArray.push(ele.offsetHeight);
          }else{ 
                var min = Math.min.apply(false,heightArray)
                //设置定位
                ele.style.position="absolute";
                ele.style.top = min +20 +"px";

                var minIndex = heightArray.indexOf(min);
                ele.style.left = eles[minIndex].offsetLeft-20+"px";

                //最后改变标准数组
                heightArray[minIndex] += ele.offsetHeight + 20;
          }
    })

    //让数据可在外部获取
    GLOBAL.heightArray = heightArray;
}

onscroll=function(){

    //如果需要加载，发起ajax请求
    if( !isLoad() || GLOBAL.loading_flag ) return false;
    // 开始加载数据;
    GLOBAL.loading_flag  = true;   
    _ajax("../json/productjson.json")
    .then(function(res){
        GLOBAL.loading_flag  = false;
        var goodsJSON =JSON.parse(res).data;
        randomPage(goodsJSON);
        eleSort(container.children);
    })
}
//决定要不要加载
function isLoad(){
    //必要参数不存在，判断函数不执行
    if(GLOBAL.heightArray === undefined){
          return false;
    }

    var st = document.body.scrollTop || document.documentElement.scrollTop;
    var mh = Math.min.apply(false,GLOBAL.heightArray);
    if(GLOBAL.ch + st >= mh){
          return true;
    }else{
          return false; 
    }
          
          
}

