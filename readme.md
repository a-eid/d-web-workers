#web workers

> can't update `ui` , or update the DOM with `web workers` 

> do computation work that is `non ui` related work , then we 
  post a message to the `ui thread` 

### workers can do the following 
* send (post) and recieve messages to its owner .  
* use `setTime` `setInterval` and other time realated functions 
* use `eval` .. and other core `js` functions 
* use `XMLHttpRequest` and `Websockets` 
* use sync and async file APIs 
* use sync and async indexDB APIs 
* use `navigator.userAgent` ? (but not `geolocation`)
* create other workers 


### detect browser support `fairly okay` 
    // Modernizer
    if(Modernizer.webworkers){
      // dedicated workers are available .
    }

    // native  
    if(window.Worker){
      // dedicated workers are available . 
    }


### starting a dedicated worker 
    
    var worker = new Worker('add.js')
    // add.js
    var start = Date.now()
    var sec = 5 
    var end = start + (sec * 1000)
    while(Date.now() < end ) {} // simulating a long running operation . 


### posting messages from a worker 

    // add.js
    var sum = (/* imagine a long running operation here .  */)
    postMessage(sum) // post message back to the owning thead . 
    
    var worker = new Worker('add.js')
    worker.addEventListener('message' , function(e){
      alert(e.data); // alert the data that is recieved back from the worker . 
    } , false) /* what is false */

### to post messages from the owner to the worker .. 

    var worker = new Worker('add.js')
    woker.addEventListener('message' , function(e){
      alert(e.data)
    } , false)
    // passing messages to the worker . 
    worker.postMessage({op1: 3 , op2: 5})
    
    // worker .. 
    addEventListener('message' , function(e){
      var a = e.data.op1 
      var b = e.data.op2
      postMessage(a + b) 
    } , false)


### Handling errors from a worker . 




























