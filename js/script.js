let funcObj={
  f_0:function(){
    const tl = gsap.timeline();
    tl.from("#section0 .rel>.text", {
      opacity: 0,
      stagger: 0.7,
      y:-100,
    });
    tl.from("#section0 .rel>.courseBtn", {
      opacity: 0,
      stagger: 0.7,
      y:100,
    });
    tl.from("#section0 .scroll", {
      opacity: 0,
    });
  },
  f_1:function(){
    const tl = gsap.timeline();
    tl.from("#section1 .rel>*", {
      // opacity: 1,
      // stagger: 0.7,
      // y:100,
    });
  },
  f_2:function(){
    const tl = gsap.timeline();
    tl.to("#section2 .rel .title", {
      opacity: 1,
      stagger: 0.7,
      y:-100,
    });
    tl.to("#section2 .card-group .card1", {
      opacity: 1,
      stagger: 0.7,
      rotate:-10,
      y: -100,
    });
    tl.to("#section2 .card-group .card2", {
      opacity: 1,
      stagger: 0.7,
      rotate:20,
      y: -100,
    });
    tl.to("#section2 .des", {
      opacity: 1,
      stagger: 0.7,
      y: -100,
    });
  },
  f_3:function(){
    const tl = gsap.timeline();
    tl.to("#section3 .rel > *", {
      opacity: 1,
      stagger: 0.3,
      y: 0,
    });
  },
  f_4:function(){
    const tl = gsap.timeline();

    tl.to("#section4 .rel .together .title", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section4 .rel .together .des", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section4 .plane-group .plane", {
      opacity: 1,
      stagger:{
        amount:1,
        from:'random',
        duration:6,
      },
      y: 10,
    });
  },
  f_5:function(){
    const tl = gsap.timeline();

    tl.to("#section5 .rel .together .title", {
      opacity: 1,
      stagger: 0.3,
      y: 0,
    });
    tl.to("#section5 .rel .together .des p", {
      opacity: 1,
      stagger: 0.3,
      y: 0,
    });
    tl.to("#section5 .rel .together .des .btn", {
      opacity: 1,
      stagger: 0.3,
    });
    tl.to("#section5 .rel .people .peopleAni svg path", {
      opacity: 1,
      stagger:{
        amount:0.5,
        from:'random',
        duration:6,
      },
      y: 0,
    });

  },
  f_6:function(){
    const tl = gsap.timeline();

    tl.to("#section6 .rel> p ", {
      opacity: 1,
      stagger: 0.3,
      y: 0,
    });
    tl.to("#section6 .rel .btn", {
      opacity: 1,
      stagger: 0.3,
      y: 0,
    });
  },
};

let section = document.querySelectorAll('section');

funcObj['f_0']();  //스크롤과 상관없이 첫번째는 먼저 실행이 되게 함

window.addEventListener('scroll', function(){

  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight;  //브라우저의 높이값

  //console.log(scroll,outHeight);

  for(let i =0; i<section.length;i++){
    //스크롤이 되었을때 섹션이 뷰포트에 들어왔으면 그때 섹션함수를 실행함
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        // console.log("지금있는곳:",i);
    }
  };

});
