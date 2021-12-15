$(function(){
    //mousemoveイベントでカーソル要素を移動させる
    $(document).on("mousemove",function(e){
      //カーソルの座標位置を取得
      console.log(e);
      var x=e.clientX;
      var y=e.clientY;
      //カーソル要素のcssを書き換える用
      $("#cursor").css({
        "opacity":"1",
        "top":y+"px",
        "left":x+"px"
      });
      // カーソルストーカーを遅らせる
      setTimeout(function(){
        $("#stalker").css({
          "opacity":"1",
          "top":y+"px",
          "left":x+"px"
        });
      },300);
    });


   
});








