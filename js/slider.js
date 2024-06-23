$(document).ready(function(){
  //모바일 메뉴눌렀을 때
  $('header .mob_btn').click((e)=>{
    (e).preventDefault();
    $('header .mob_btn').toggleClass('close');
    $('.subNav').toggleClass('active');
  })


  //webN 버튼누를때

  const nextBtn = $('#section3 .s3-slide .arrow-group .arrow.right');
  const prevBtn = $('#section3 .s3-slide .arrow-group .arrow.left');

  /* 좌우버튼이 2개기 때문에 row1,row2 에 있는 버튼인지 알아내야 함 */
  nextBtn.on('click', function (e) {
    e.preventDefault(); 

    const slider = $(this).parent('.row');
    next(0);
    prevBtn.removeClass('stop')
  });

  prevBtn.on('click', function (e) {
    e.preventDefault(); //기본기능해제
    const slider = $(this).parent('.row');
    prev(0);
    nextBtn.removeClass('stop');
  });

  function next(i) {

    let index = $('#section3 .s3-slide .row .row_inner .WEBcard.active').index();
    let slLength = $('#section3 .s3-slide .row .row_inner .WEBcard').length;

    index++;
    if(index==slLength){
      index=0;
    }else if(index==slLength-1){
      nextBtn.addClass('stop')
    }

    $('#section3 .s3-slide .row .row_inner .WEBcard').removeClass('active')
    $('#section3 .s3-slide .row .row_inner .WEBcard').eq(index).addClass('active')
    
  };

  function prev(i) {

    let index = $('#section3 .s3-slide .row .row_inner .WEBcard.active').index();
    let slLength = $('#section3 .s3-slide .row .row_inner .WEBcard').length;

    index--;
    if(index<0){
      index=slLength-1;
    }else if(index==0){
      prevBtn.addClass('stop')
    }
    
    $('#section3 .s3-slide .row .row_inner .WEBcard').removeClass('active')
    $('#section3 .s3-slide .row .row_inner .WEBcard').eq(index).addClass('active')
    
  };


  
});






//#section1 em 에 스크롤마다 검정색 넣어야해

const welcome=gsap.timeline();
welcome.to("#section1 .des-top em:nth-of-type(1)", {color:'#000'})
welcome.to("#section1 .des-top em:nth-of-type(2)", {color:'#000'})
welcome.to("#section1 .des-top em:nth-of-type(3)", {color:'#000'})
welcome.to("#section1 .des-top em:nth-of-type(4)", {color:'#000'})

welcome.to("#section1 .des-bottom em:nth-of-type(1)", {color:'#000'})
welcome.to("#section1 .des-bottom em:nth-of-type(2)", {color:'#000'})
welcome.to("#section1 .des-bottom em:nth-of-type(3)", {color:'#000'})
welcome.to("#section1 .des-bottom em:nth-of-type(4)", {color:'#000'})
welcome.to("#section1 .des-bottom em:nth-of-type(5)", {color:'#000'},'some-label')
welcome.to('.underline img',{opacity:1},'some-label');
welcome.to("#section1 .des-bottom em:nth-of-type(6)", {color:'#000'})
welcome.to("#section1 .des-bottom em:nth-of-type(7)", {color:'#000'})





ScrollTrigger.create({
  animation: welcome,
  trigger:"#section1",
  start:"top top",
  end:"+=1000",
  scrub: true,
  pin: true,
  anticipatePin:1, 
});

