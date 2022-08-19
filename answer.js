
function answer(self){
if(self.value==='정답'){
document.querySelector('span').style.color='red';
self.value= '정답없애기';

var alist = document.querySelectorAll('span');
var i= 0;
while(i<alist.length){
    alist[i].style.color='red';
    i=i+1;
}

}else{
document.querySelector('span').style.color='white';
self.value= '정답';

var alist = document.querySelectorAll('span');
var i= 0;
while(i<alist.length){
    alist[i].style.color='white';
    i=i+1;
}
}
}
