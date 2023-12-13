var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send()
req.onload = function(){

var res = req.response;
// console.log(res);

var arrObj = JSON.parse(res);
// console.log(arrObj);

// for(var i=0;i<arrObj.length;i++){
//     console.log(arrObj[i].name.common);
// }

// for(var j in arrObj){
//     console.log(arrObj[j].name.official);
// }

// for(var k of arrObj){
//     console.log(k.name.official);
// }

arrObj.forEach((one, ind) => {
    console.log(ind, one.name.common);
});

}


