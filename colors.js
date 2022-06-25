var body ={
  SetColor : function(color){/*객체와 객체 사이는 콤마로 구분한다*/
    // document.querySelector('body').style.color=color;
    $('body').css('color',color); //  body태그의 글자색을 파라미터값으로 설정
  },
  SetBackgroundColor : function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color); //  body태그의 배경색을 파라미터값으로 설정
  }
}
var link = {
  SetColor : function(color){
    // var alist =document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length){
    //   alist[i].style.color = color;
    //   i+=1;
    // }
    $('a').css('color', color);
  }
}
function nightDayHandler(self){
var target = document.querySelector('body');
if (document.querySelector('#day_night').value==='night mode'){
  body.SetBackgroundColor('black');
  body.SetColor('white');
  self.value='day mode';

  link.SetColor('Yellow');
}
else{
  body.SetBackgroundColor('AntiqueWhite');
  body.SetColor('black');
  self.value='night mode';

  link.SetColor('Blue');
}
}
