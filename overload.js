function main(){
    console.log("Main Func");
    console.log(addNums(5,7))
    console.log(addNums(5,7,9))
}

function funcChooser(){
    if(arguments.length==2)[
        addNums2(2,3)
    ]
    else{
        addNums3(2,3,4)
    }
}

function addNums2(x,y){
    console.log('2 nums')
    return x+y;
}

function addNums3(x,y,z){
    console.log('3nums')
    return x+y+z;
}

main();