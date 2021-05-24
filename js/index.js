/**
 * 21-05-24 11:25   周一
 */
//
// let wrap = $('.wrap')
// let box = wrap.children[0]
//wrap.offsetParen 获取到它最近得祖先元素
// console.log(wrap.offsetParent)
//获得定位元素得 得left和top得值
// console.log('定位的 left' + ' ' + box.offsetLeft)
// console.log('定位的 top'+ ' ' +  box.offsetTop)

//获得box的 高度和宽度 包括padding 和 border
// console.log('Height'+ ' ' +  box.offsetHeight)
// console.log('Width'+ ' ' +  box.offsetWidth)

//border的 left值 和 top的值
// console.log('border-left'+ ' ' +  box.clientLeft)
// console.log('border-top'+ ' ' +  box.clientTop)

//获得元素的高宽 不包括 border 和 padding
// console.log('不包括border和padding的高度'+ ' ' +  box.clientHeight)
// console.log('不包括border和padding的宽度'+ ' ' +  box.clientWidth)

// console.log(document.documentElement)
//获得页面 滚动的时候的 html的高度和宽度
// console.log('滚动条'+ ' ' +  document.documentElement.clientWidth)
// console.log('滚动条'+ ' ' +  document.documentElement.clientHeight)

let scrollHeight = document.documentElement.scrollHeight
let clientHeight =  document.documentElement.clientHeight
// console.log('clientHeight' + clientHeight)
// console.log('scrollHeight' + scrollHeight)

//console.log('滚动条的滚动的距离'+ ' ' + document.documentElement.scrollTop) //滚动条的滚动的距离
//console.log(scrollHeight  === clientHeight + document.documentElement.scrollTop) //true

// for (let i = 0; i < 5; i ++) {
//     let div = document.createElement('div')
//     div.classList.add('gun')
//     document.body.append(div)
// }


//onmouseover 它执行了好多好多次鼠标移入的事件  window ---- scroll方法
// scrollBottom
// scrollRight
//document.documentElement.onscroll = document.body
let nav = $('nav')
let scr =  document.documentElement.scrollTop
let top1 = $('.right-nav a:last-child')
document.documentElement.onscroll  = document.body.onscroll = window.scroll = function () {
    if (document.documentElement.scrollTop > 800) {
        nav.classList.add('active')
        // console.log(top)

        top1.classList.add('show')
    }else {
        nav.classList.remove('active')
        top1.classList.remove('show')
    }
    // console.log( document.documentElement.scrollTop)
}



//回到顶部
top1.onclick = function () {
    window.scrollTo(0,0)
}
//模仿锚点链接
let as =  $$('.right-nav a[data-id]')
for (let item of as ) {
    item.onclick = function () {
       let dataId =  item.getAttribute('data-id')
       let tar = document.querySelector('#'+ dataId)
        tar.scrollIntoView() // 滚动到能看到的区域
    }
}
let small = $('.small-box')
function move(e) {
    // console.log(this)
    let h = small.offsetHeight
    let w = small.offsetWidth
    // console.log(e.clientX)
    // console.log(e.clientY)
    small.style.left = e.clientX - ( w /2) + 'px'
    small.style.top= e.clientY - (h / 2) + 'px'
}
small.addEventListener('mousemove',move)



function timerFun() {
    let timer = function down_timer(now = null) {
        let  nowTimer = new Date();
        let  y = nowTimer.getFullYear() //年
        let  m = nowTimer.getMonth()+1//月
        m = m< 10 ? `0${m}`: m
        let  d = nowTimer.getDate()//日
        d = d< 10 ? `0${d}`: d
        let  h = nowTimer.getHours()//时
        h = h< 10 ? `0${h}`: h
        let  minute = nowTimer.getMinutes()//分
        minute = minute< 10 ? `0${minute}`: minute
        let  sed = nowTimer.getSeconds()//秒
        sed = sed < 10 ? `0${sed}`:sed
        now = `${y}年${m}月${d}日${h}:${minute}:${sed}`
        return now
    }
    setInterval(function (){
        $('.time').innerHTML = `${timer()}`
    });

}
