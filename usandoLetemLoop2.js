let funcs = []

for(let i = 1; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })

}
funcs[0]()
funcs[2]()
funcs[5]()
funcs[8]()