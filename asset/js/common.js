
/* sass 반응형 */ 
ScrollTrigger.matchMedia({
  // small
  "(min-width: 768px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
    console.log('모바일제외 사용')
    
    $('.gnb-item a').click(function(e){
      e.preventDefault();

      target =  $(this).data('target');
      gsap.to(window, {duration: .7, scrollTo:target});

    })

    /**
    * 헤더 메뉴 클릭 시, 특정 영역으로 이동
    * @version 1.0.0
    * @since 2022-06-18
    * @author 이유라 (Nico)
    * @memo
    */
    // var cTarget = $('.sc-company').offset().top;//해당 위치 반환
    // var vTarget = $('.sc-vision').offset().top;
    // var iTarget = $('.sc-introduce').offset().top;
    // var nTarget = $('.sc-network').offset().top;
    // var fTarget = $('.footer-area').offset().top;

    // $('.gnb-item.company').click(function(e){
    //     e.preventDefault();
    //     $("html, body").animate({scrollTop:cTarget},400)// 선택한 위치로 이동. 400: 0.4초
    // });
    // $('.gnb-item.vision').click(function(e){
    //     e.preventDefault();
    //     $("html, body").animate({scrollTop:vTarget},500)
    // });
    // $('.gnb-item.game').click(function(e){
    //     e.preventDefault();
    //     $("html, body").animate({scrollTop:iTarget},500)
    // });
    // $('.gnb-item.com2usOn').click(function(e){
    //     e.preventDefault();
    //     $("html, body").animate({scrollTop:nTarget},500)
    // });
    // $('.gnb-item.contacts').click(function(e){
    //     e.preventDefault();
    //     $("html, body").animate({scrollTop:fTarget},600)
    // });


    // @@gsap pin사용했을때는 아래방법으로 사용해야함(아니면 이동이 제대로 되지않음)
    // @@scrollto gsap src가져와야함! gsap 사이트에서 가져오기 가능
    $('.gnb-item a').click(function(e){
      e.preventDefault();

      target =  $(this).data('target');
      gsap.to(window, {duration: .7, scrollTo:target});

    })
      


  },
    
  // all 
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
    console.log('모든사이트에서 작동')

    /**
    * 헤더 특정영역에서 사라지기 
    * @version 1.0.0
    * @since 2022-06-18
    * @author 이유라 (Nico)
    * @memo
    */
    $(window).scroll(function(){
      var curr = $(this).scrollTop();
      var target = $('.sc-visual').offset().top;

      if (curr >= target) {
        $('.header-area').addClass('active');
          
      } else {
        $('.header-area').removeClass('active');
      }
    });;


    /**
    * 상단으로 이동
    * @version 1.0.0
    * @since 2022-06-18
    * @author 이유라 (Nico)
    * @memo
    */
    $('.btn-top').click(function(e){
      e.preventDefault();
      $('body, html').animate({scrollTop:0})
    });


    /**
    * 메뉴열기
    * @version 1.0.0
    * @since 2022-06-18
    * @author 이유라 (Nico)
    * @memo
    */

    $('.header-area .btn-open').click(function(){
      $('.nav-wrap').addClass('active');
      $('body').addClass('scroll-hidden');
    })
 
    $('.nav-wrap .btn-close, .dimmed').click(function(){
      $('.nav-wrap').removeClass('active');
      $('body').removeClass('scroll-hidden');
    })
 
    
    



    

  }
      
}); 
    
    
        


    


