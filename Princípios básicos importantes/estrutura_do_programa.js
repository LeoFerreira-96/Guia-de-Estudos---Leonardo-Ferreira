/*
------- Triângulo com Loop -------
var hastag = '#';

while(hastag.length <= 7){
    console.log(hastag)
    hastag += '#'
}
*/


/*
------- FizzBuzz -------
for (count=0; count<=100; count++) {
    if(count% 3 === 0 && count % 5 === 0){
        console.log("FizzBuzz")
        continue
    }
    else if(count % 3 === 0 ){
        console.log("Fizz")
        continue
    }
    else if(count % 5 === 0){
        console.log("Buzz")
        continue
    }
    else{
        console.log(count)
    }
}
*/

/*
------- Tabuleiro de Xadrez -------
*/
var size = 3;
var result = "";

for(line=0; line < size; line++){
    if (line % 2 == 0){
        result = ""
    }
    else{
        result = " "
    }
    for(cols=0; cols < size; cols++){
        if( cols % 2 == 0){
            result += "#"
        }
        else{
            result += " "
        }
    }
    console.log(result)
}