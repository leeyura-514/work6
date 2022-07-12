



ScrollTrigger.matchMedia({
    // large
    "(min-width: 1240px)": function() {
    // setup animations and ScrollTriggers for screens 960px wide or greater...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

        /** 
         * introduce 오른쪽에서 나타남
         * @version 1.0.0
         * @since 2022-06-20
         * @author 이유라
         * @memo
         */
        
        
        // gsap.from('.sc-introduce .swiper-slide',{
    
        //     scrollTrigger:{
        //         trigger:'.sc-introduce .swiper',
        //         start:"bottom 70%",
        //         end:"+=500%",
        //         // markers:true,
        //     },
        //     // rotationX: 360,
        //     xPercent:200,
        //     duration: 1.7,
        //     ease: "bounce",
        //     stagger:0.3,
        // })


    },

    "(min-width: 768px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
        console.log('모바일제외 사용')

        /** 
         * visual 가로 스크롤 슬라이드 + 오버 시, 제목 밑줄
         * @version 1.0.0
         * @since 2022-06-16
         * @author 이유라
         * @memo
         * issue : 부모 컨트롤 방법 &  자식 컨트롤 방법
         */

        // @@1. 부모 컨트롤 방법
        // gsap.t0('',{
        //     scrollTrigger:{
        //         trigger:".slide-wrap",
        //         strat:"top top",
        //         end:"+=300%",//강제로 스크롤 영역이 껍데기 slide-wrap 세배있다는 기준하에 스크롤 (100%는 기본값)
        //         markers:true,
        //         scrub:1,
        //         pin:true,//스크롤 고정 기능
        //     },
        //     xPercent:-66.66//세번째 슬라이드 왼쪽 위치 잡아줌
        // })


        // @@자식 컨트롤 방법 slide-wrap에는 기준점이 잡히지않아서 밑에 영역이 올라옴
        const slideChild = document.querySelectorAll('.sc-visual .slide');
        // console.log(slideChild);

        slideChild.forEach(element => {
            gsap.to(element,{
                scrollTrigger:{
                    trigger:'.aaa',//slide-wrap의 부모요소 더 만들어서 기준점을 만들어줘야함
                    strat:"top top",
                    end:"+=300%",//강제로 스크롤 영역이 껍데기 slide-wrap 의 세배있다는 기준하에 스크롤 (100%는 기본값)
                    // markers:true,
                    scrub:1,
                    pin:true,//스크롤 고정 기능
                },
                xPercent:-200,//세번째 슬라이드 왼쪽 위치 잡아줌
            })
            
        });





        /** 
        * 비전 화면 확대 + 스크롤 시, 되감기
        * @version 1.0.0
        * @since 2022-06-17
        * @memo 
        */

        gsap.fromTo('.sc-vision .img-area', {
            opacity: 0.8,
            scale: 0.9,
            }, {
            scrollTrigger: {
                trigger: '.sc-vision .img-area',
                start: "0% 80%",
                end: "0% 20%",
                scrub: 1,
                // markers:true,
    
            },
            opacity: 1,
            scale: 1,
            duration: 1.2,
        
        });
        

        


    },

    "(max-width: 768px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore. 
        console.log('모바일에서만 사용')
        /** 
         * 오버 시, 슬라이드 제목 밑줄
         * @version 1.0.0
         * @since 2022-06-16
         * @author 이유라
         * @memo
         */
        $('.sc-visual .text-box').hover(function(){

            $(this).find('.line').addClass('hover');
        },function(){

            $(this).find('.line').removeClass('hover');
        })

    },


    // all 
    "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
    
        console.log('모든사이트에서 다 작동')

        /**
         * 메인스크린 글자가 양쪽에서 생김
         * @version 1.0.0
         * @since 2022-06-16
         * @author 이유라 (Nico)
         * @memo
         */
        function introMotion(){

            const introTl = gsap.timeline({
                defaults:{
                    duration:1,
                    delay:.5,
                    ease: "expo.out",
                },
                onComplete:()=>{
                    $('.main-bg').remove();
                }

            });
            introTl.addLabel('m1')
            .to('.main-bg .top',{xPercent:100},'m1')
            .to('.main-bg .bottom',{xPercent:-100},'m1')

            .addLabel('m2')//label쓸 때,  @@introTl 변수는 처음에만 쓰거나, 아님 아예 다써야만 실행됨
            .fromTo('.main-screen .left',{xPercent:-100},{xPercent:0},'m2-=1')//-는 시간을 좀 앞당김, +는 지연 후 실행
            .fromTo('.main-screen .right',{xPercent:100},{xPercent:0},'m2-=1')
            
        }

        introMotion(); 


        /**
         * 각각 글자가 불규칙하게 나타남
         * @version 1.0.0
         * @since 2022-06-16
         * @author 이유라 (Nico)
         * @memo
         */
        // @@gsap 사이트 참고
        // const str = "apple banana orange";
        // const arr = str.split();

        // document.writeln(arr); // apple banana orange
        // document.writeln(arr.length); // 1

        text = $('.sc-visual .sc-title').text();
        textArr = text.split('');
        // console.log(text.split());
        console.log(textArr);

        html = '';//빈칸만들기
        textArr.forEach(element => {
            if(element == ' '){//빈칸조건 줄때 실제로 띄어쓰기, ==은 두개
                html += `<span>&nbsp;</span>`//@@&nbsp 띄어쓰기를 의미함
            }else{
                html += `<span>${element}</span>`;
            }

        });
        $('.sc-visual .sc-title').html(html);//괄호 안에 변수



        gsap.fromTo('.sc-visual .sc-title span', {
            // // rotation:-100,
            // // rotation:"random(-360,360)",//각자 다르게 랜덤수치 주기
            // rotation:"random(-360,360)",//각자 다르게 랜덤수치 주기
            // rotation:"random(-360,360)",//각자 다르게 랜덤수치 주기
            rotation:'random(-360,360)',
            x:'random(-360,360)',
            y:'random(-360,360)',
            'filter':'blur(random(0,30)px)'
        },{
            scrollTrigger: {
                trigger: ".sc-visual .sc-title",
                start: "top 80%",
                end: "top 50%",
                // markers: true,
                scrub:1,
            },
            rotation:0,
            duration:1,
            x:0,
            y:0,
            'filter':'blur(0px)',// 인식안되서 ''처리함 인식안될때 팁
        })





        /** 
         * GSAP 전체 영역에서 글자 아래에서 위 효과 각각 적용
         * @version 1.0.0
         * @since 2022-06-16
         * @author 이유라
         * @memo
         */
        $('[data-up]').each(function (index, element) {

            gsap.fromTo(element, {
                opacity: 0,
                y: 50,
            }, {
                scrollTrigger: {
                    trigger: element,
                    start: "0% 80%",
                    end: "100% 0%",
                    // markers:true,
                },
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.4,

            })
        }) //


    
        /** 
        * introduce 스와이퍼
        * @version 1.0.0
        * @since 2022-06-20
        * @memo 
        */
       var swiper = new Swiper('.sc-introduce .swiper', {
            slidesPerView: 2.3,
            // spaceBetween: 50,
        });










        /** 
        * network 글자 사이 이미지 열리고 닫힘
        * @version 1.0.0
        * @since 2022-06-20
        * @memo 
        */
        gsap.from('.sc-network .img-box img', {
            scrollTrigger: {
                trigger: '.sc-network',
                start: "20% 50%",
                end: "0% 0%",
                scrub: 1,
                // markers:true,
                
            },
            width:0,
            stagger:.3,
        });

        gsap.from(".sc-visual .img-smile", {
            scrollTrigger: {
                // amount: 1.5,
                trigger:".sc-visual",
                start: "top 80%",
                end: "top 50%",
                // markers:true,
            },
            scale: 0.1, 
            y: 0,
            yoyo: true, 
            // repeat: -1, 
            ease: "power1.inOut",
            scrub:1,
        });//




    
    }//all-end
    
}); //ScrollTrigger.matchMedia-end


    