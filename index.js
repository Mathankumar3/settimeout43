let math = document.createElement("div");
math.classList.add("math");

let span = document.getElementById("span");
span.innerHTML = 11;

document.body.append(math);
let count = 11;
setTimeout(()=>{
    count = count-1;
    span.innerHTML = "count";
    setTimeout(()=>{
        count = count-1;
        span.innerHTML = "count";
        setTimeout(()=>{
            count = count-1;
            span.innerHTML = "count";
            setTimeout(()=>{
                count = count-1;
                span.innerHTML = "count";
                setTimeout(()=>{
                    count = count-1;
                    span.innerHTML = "count";
                    setTimeout(()=>{
                        count = count-1;
                        span.innerHTML = "count";
                        setTimeout(()=>{
                            count = count-1;
                            span.innerHTML = "count";
                            setTimeout(()=>{
                                count = count-1;
                                span.innerHTML = "count";
                                setTimeout(()=>{
                                    count = count-1;
                                    span.innerHTML = "count";
                                    setTimeout(()=>{
                                        count = count-1;
                                        span.innerHTML = "count";
                                        setTimeout(()=>{
                                            count = count-1;
                                            span.innerHTML = "HAPPY INDEPENDANCE DAY";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)