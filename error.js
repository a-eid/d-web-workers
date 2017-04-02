addEventListener('message' , function(e){
  postMessage(e.data.p1 + e.data.p2)
} , false)

document.createElement('div')