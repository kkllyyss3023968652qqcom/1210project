function Jump(){}
Jump.prototype.init = function(){
    this.ul = document.querySelector(".container-goodslist");
    this.main = this.ul.children;
    // console.log(this.main)
    _ajax("../json/productjson.json")
    .then(function(res){
        // console.log()
        var goodslist = JSON.parse(res).data;
        this.renderPage(goodslist)
        this.handleEvent();

    }.bind(this))
    // this.handleEvent(goodslist)
}
Jump.prototype.handleEvent = function(){
        // console.log(this.main.length)
        for(var i=0 ; i<this.main.length;i++){
            // console.log(this.main)
            this.main[i].onclick = function(event){
                console.log(1)
                var e = event || window.event;
                var target = e.target || e.srcElement;
                console.log(target.src)
                // document.cookie = this.ary[i].img
                // document.cookie = this.ary[i].title
                // document.cookie = this.ary[i].jiaqian
                location.href = "./details.html"
                var data = target.src
                document.cookie = ('imgsrc',data)
            }.bind(this)
        }
}
Jump.prototype.renderPage = function(ele){
    var html = "";
    // console.log(ele)
    this.list = ele;
    this.ary = [];
    for(var i=0;i<this.list.length;i++){
            // console.log(ele[i])
                    html +=`<div class="goods-box">
                        <div class="good-image">
                            <img src="${ele[i].image}" alt="">
                        </div>
                        <h4>${ele[i].title}</h4>
                        <p>${ele[i].figure}</p>
                        <span>${ele[i].moneyone}</span>
                        <div class="wrapper">
                            <button class="btn"  data-iid="${ele[i].iid}">加入购物车</button>
                            <button class="btn" >立即购买</button>
                        </div>
                    </div>`
                    var arr ={
                        img:"img=" + this.list[i].image,
                        title:"title="+this.list[i].title,
                        jiaqian:"jiaqian="+this.list[i].moneyone
                    }
                    this.ary.push(arr)
    }
    this.ul.innerHTML += html
               
}

var jump = new Jump();
jump.init()




