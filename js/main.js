$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
     // 固定ヘッダーの高さ（heightを揃える）
     var headerHeight = 50;
     // スクロールの速度
     var speed = 400; // ミリ秒
     // アンカーの値取得
     var href= $(this).attr("href");
     // 移動先を取得
     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先を数値で取得（固定ヘッダーの高さを引く）
     var position = target.offset().top - headerHeight;
     // スムーススクロール
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });
});


// スクロールボタン
$(function() {
  var topBtn = $('#js-scrollTop');    
  topBtn.hide();
  // スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  // スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});