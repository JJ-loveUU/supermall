export  function debounce(func,delay){//去抖动
  let timer=null
  return function(){
    if (timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func();
    },delay)
  }
}