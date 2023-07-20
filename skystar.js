// poem
var words=[
    '祝你生日快乐',
    '祝你幸福满溢',
    '祝你岁岁年年',
    '祝你健康快乐',
    '祝你每一天都充满喜悦和笑声',
    '祝你实现所有的梦想和愿望',
    '祝你生日如意',
    '祝你好运不断',
    '祝你的生活充满爱和幸福',
    '祝你岁月静好',
    '祝你生日快乐',
    '祝你幸福满溢',
    '祝你岁岁年年',
    '祝你健康快乐',
    '祝你的生活充满阳光和笑容',
    '祝你天天都有好心情',
    '祝你每天都有无尽的喜悦和满足',
    '祝你充满欢乐和美好的回忆',
    '祝你获得更多的成功和成就',
    '祝你的人生充满美丽',
    '祝你的人生充满幸福',
    '祝你的人生充满成功',
    '祝你每一天都充满笑声和祝福',
    '祝你的梦想成真',
    '祝你事业蒸蒸日上',
    '祝你生活幸福美满',
    '祝你每一天都充满温暖和快乐',
    '祝你生日快乐',
    '祝你幸福满溢',
    '祝你岁岁年年',
    '祝你健康快乐',
    '祝你每一天都充满喜悦和笑声',
    '祝你实现所有的梦想和愿望',
    '祝你生日如意',
    '祝你好运不断',
    '祝你的生活充满爱和幸福',
    '祝你岁月静好',
    '祝你生日快乐',
    '祝你幸福满溢',
    '祝你岁岁年年',
    '祝你健康快乐',
    '祝你的生活充满阳光和笑容',
    '祝你天天都有好心情',
    '祝你每天都有无尽的喜悦和满足',
    '祝你充满欢乐和美好的回忆',
    '祝你获得更多的成功和成就',
    '祝你的人生充满美丽',
    '祝你的人生充满幸福',
    '祝你的人生充满成功',
    '祝你每一天都充满笑声和祝福',
    '祝你的梦想成真',
    '祝你事业蒸蒸日上',
    '祝你生活幸福美满',
    '祝你每一天都充满温暖和快乐',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '刘思贝';
          textone.style.color = '#B1BCE6';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#B1BCE6';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#B1BCE6';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '祝你生日快乐';
          textthree.innerHTML='岁岁年年，万喜万般皆宜';
      },3000)
      setTimeout(function(){
        textone.innerHTML = '新的一岁,愿生活';
        texttwo.innerHTML = '风平浪静，柳暗花明';
        textthree.innerHTML = '三分惊喜，七分尽兴';
      },7000)
      setTimeout(function(){
        textone.innerHTML = '';
        texttwo.innerHTML = '所有过往，皆为序章，所有将来，皆是可盼';
        textthree.innerHTML = '';
      },11000)
      setTimeout(function(){
        textone.innerHTML = '生活里从来不缺少对手和敌人';
        texttwo.innerHTML = '有时候你必须做自己的英雄';
        textthree.innerHTML = '';
      },15000)
      setTimeout(function(){
        textone.innerHTML = '愿你可以永远横冲直撞';
        texttwo.innerHTML = '哪怕头破血流';
        textthree.innerHTML = '也一如年少时的模样';
      },19000)
      setTimeout(function(){
        textone.innerHTML = '';
        texttwo.innerHTML = '愿你付出甘之如饴，所得归于欢喜';
        textthree.innerHTML = '';
      },23000)
      setTimeout(function(){
        textone.innerHTML = '';
        texttwo.innerHTML = '愿你一生努力，一生被爱';
        textthree.innerHTML = '';
      },27000)
      setTimeout(function(){
        textone.innerHTML = '';
        texttwo.innerHTML = '愿你在糟糕的日子里和注定的人撞个满怀';
        textthree.innerHTML = '';
      },31000)
      setTimeout(function(){
        textone.innerHTML = '愿你可以走过长长的路';
        texttwo.innerHTML = '若没有人陪你颠沛流离';
        textthree.innerHTML = '便以梦为马，随处而栖';
      },35000)
      setTimeout(function(){
        textone.innerHTML = '愿你有过世事沧桑';
        texttwo.innerHTML = '依旧拥有最初的梦想';
        textthree.innerHTML = '';
      },39000)
      setTimeout(function(){
        textone.innerHTML = '愿你的生活';
        texttwo.innerHTML = '永远能找到属于自己的光';
        textthree.innerHTML = '';
      },43000)
      setTimeout(function(){
        textone.innerHTML = 'Become a sun';
        texttwo.innerHTML = 'and you’ll shine on your own';
        textthree.innerHTML = '';
      },47000)