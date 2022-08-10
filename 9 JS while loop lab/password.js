function password(input){
 let username = input[0];
 let validPassword = input[1];
 let password = '';
 index = 2;

 while(password ==! validPassword ){
    console.log(`Welcome ${username}!`);   
     password = input[index];
     index++;
     
 }

}
password(["Gosho",
"secret",
"secret"])


