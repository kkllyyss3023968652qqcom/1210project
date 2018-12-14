
// 1. 获取数据;

function getMsg(){

    $.ajax("../json/productjson.json",
    {
          dataType:"json"
    })
    .then(function(res){
        //   console.log(res.data);
          renderPage(res.data);
    })

}

var goodsJson = [];

function renderPage(json){
    goodsJson = json;
    // console.log(goodsJson)
    var html = "";
    // 根据比例计算图片高度;
    json.forEach(function(ele){
          html +=  `<div class="goods-box">
                        <div class="good-image">
                            <a href="./detail.html"> <img src="${ele.image}" alt=""></a>
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
    $(".container-goodslist").html(html);
}
getMsg();

// 购物车;

// 1. 所有的按钮绑定事件; 

$(".container-goodslist").on("click",".btn",handleCarClick);

function handleCarClick(event){
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var iid = $(target).attr("data-iid");
    var nowMsg = findJson(iid)[0];
    addCar(nowMsg,iid);
}

function addCar(nowMsg , iid){
    $.extend(nowMsg , {count : 1});
    var sNowMsg = JSON.stringify(nowMsg);
    // console.log(sNowMsg);


    if(!localStorage.cart){
          localStorage.setItem("cart",`[${sNowMsg}]`);
          return false;
    }
    var aMsg = JSON.parse(localStorage.cart);

//     // 如果存在数据就不push ， 而是增加 count 值;
    if(!hasIid(aMsg,iid)){
          aMsg.push(nowMsg);
    }

    localStorage.setItem("cart",JSON.stringify(aMsg));

    // console.log(JSON.parse(localStorage.cart));
}

function hasIid(aMsg,iid){
    for(var i = 0 ; i < aMsg.length ; i ++){
        // console.log(aMsg)
          if(aMsg[i].iid === iid){
                aMsg[i].count ++;
                return true;
          }
    }
    return false;
}
function findJson(iid){
    return  goodsJson.filter(function(item){
          return  item.iid === iid
    })
}

// 购物车获取;;

$(".car-item").on("mouseenter",function(){
    $(".car-list").show();

    // console.log(getCart())
   $(".car-list ul").html(renderCart());

})
$(".car-item").on("mouseleave",function(){
    $(".car-list").hide();
})

function getCart(){
    if(!localStorage.cart) return 0;
    var aMsg = JSON.parse(localStorage.cart);
    return aMsg;
}

function renderCart(){
    var html = "";
    var cart_json = getCart();
    var sum=0;
    if(!cart_json) return 0;
    for(var i = 0 ; i < cart_json.length ; i ++){
          html += `<li>
                        <img src="${cart_json[i].image}" alt="">
                        <span>${cart_json[i].moneyone}</span>
                        <span>${cart_json[i].count}</span>
                    </li>`
        sum+=cart_json[i].count;
        var Num=document.getElementById("num");
        Num.innerHTML=sum;
    }

    return html;
    
}

$("#clear").on("click",function(){
    localStorage.clear("cart");
    var Num=document.getElementById("num");
        Num.innerHTML=0;
})
