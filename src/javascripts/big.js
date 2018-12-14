    // 放大镜---------------------------------------------

    var oSmall=document.getElementById("small");
    var oSmall_img=oSmall.children[1];
    var oBig= document.getElementById("big");
    var oFrame=document.getElementById("frame");
    var oBig_img=oBig.children[0];

    oSmall.onmouseover=function(){
        oBig.style.display="block";
        oFrame.style.display="block";
    }
    oSmall.onmouseout=function(){
        oBig.style.display="none";
        oFrame.style.display="none";
    }
    oSmall.onmousemove=function(event){
        var e= event || window.event;
        // console.log(e)
        var nTop= e.offsetY-100;
        var nLeft=e.offsetX -100;
        
        // 边界值
        if(nLeft<=0){
            nLeft=0;
        }
        if(nTop<=0){
            nTop=0;
        }
        var maxLeft=oSmall.offsetWidth - oFrame.offsetWidth;
        if(nLeft>=maxLeft){
            nLeft=maxLeft;
        }
        var maxTop=oSmall.offsetHeight - oFrame.offsetHeight;
        if(nTop>=maxTop){
            nTop=maxTop;
        }
        oFrame.style.top=nTop+ "px" ;
        oFrame.style.left= nLeft+ "px";

        // 比例
        var propX=oBig.offsetWidth / oFrame.offsetWidth;
        // console.log(propX)
        // 算位移值
        oBig_img.style.left = -nLeft*propX +"px";
        var propY=oBig.offsetHeight / oFrame.offsetHeight;
        oBig_img.style.top = -nTop * propY + "px";
        oFrame.style.backgroundPosition = `${-nLeft}px ${-nTop}px`;
    }

    var oOne_img=document.getElementById("one_img");
    var oTwo_img=document.getElementById("two_img");
    var oThree_img=document.getElementById("three_img");
    var oFour_img=document.getElementById("four_img");
    var oFive_img=document.getElementById("five_img");
    oOne_img.onclick=function(){
        oSmall_img.src="https://www.konka.com/public/images/15/ce/a7/6d17ba293e335cb8cb882a748e0f9d05c442e942.jpg?33932_OW800_OH800";
        oBig_img.src="https://www.konka.com/public/images/15/ce/a7/6d17ba293e335cb8cb882a748e0f9d05c442e942.jpg?33932_OW800_OH800";
        oFrame.style.backgroundImage=url("https://www.konka.com/public/images/15/ce/a7/6d17ba293e335cb8cb882a748e0f9d05c442e942.jpg?33932_OW800_OH800");
    }
    oTwo_img.onclick=function(){
        oSmall_img.src="https://www.konka.com/public/images/86/ca/b4/7c26e6a4ce73162bc5574fcf57048639cd3c1b23.jpg?90806_OW800_OH800";
        oBig_img.src="https://www.konka.com/public/images/86/ca/b4/7c26e6a4ce73162bc5574fcf57048639cd3c1b23.jpg?90806_OW800_OH800";
        oFrame.style.backgroundImage="https://www.konka.com/public/images/86/ca/b4/7c26e6a4ce73162bc5574fcf57048639cd3c1b23.jpg?90806_OW800_OH800";
    }
    oThree_img.onclick=function(){
        oSmall_img.src="https://www.konka.com/public/images/e8/51/10/6c3d7633537aa5865e495bdc875cec4dce0a85fc.jpg?90805_OW800_OH800";
        oBig_img.src="https://www.konka.com/public/images/e8/51/10/6c3d7633537aa5865e495bdc875cec4dce0a85fc.jpg?90805_OW800_OH800";
        oFrame.style.backgroundImage="https://www.konka.com/public/images/e8/51/10/6c3d7633537aa5865e495bdc875cec4dce0a85fc.jpg?90805_OW800_OH800";
    }
    oFour_img.onclick=function(){
        oSmall_img.src="https://www.konka.com/public/images/dd/fc/d4/9a97d7dcd79ed3410c46835cc8d760bbe9ca87b8.jpg?90806_OW800_OH800";
        oBig_img.src="https://www.konka.com/public/images/dd/fc/d4/9a97d7dcd79ed3410c46835cc8d760bbe9ca87b8.jpg?90806_OW800_OH800";
        oFrame.style.backgroundImage="https://www.konka.com/public/images/dd/fc/d4/9a97d7dcd79ed3410c46835cc8d760bbe9ca87b8.jpg?90806_OW800_OH800";
    }
    oFive_img.onclick=function(){
        oSmall_img.src="https://www.konka.com/public/images/d1/2f/4d/130d71b118c03ff388b6de6dd9badf371d10bfdb.jpg?90804_OW800_OH800";
        oBig_img.src="https://www.konka.com/public/images/d1/2f/4d/130d71b118c03ff388b6de6dd9badf371d10bfdb.jpg?90804_OW800_OH800";
        oFrame.style.backgroundImage="https://www.konka.com/public/images/d1/2f/4d/130d71b118c03ff388b6de6dd9badf371d10bfdb.jpg?90804_OW800_OH800";
    }
   