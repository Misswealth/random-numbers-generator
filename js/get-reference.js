


const myInit = {
  method: 'Get',
  headers: {
      'content-Type': 'application/json'},
  mode: 'cors',
  cache: 'default'};
let myRequest = new Request('users.json', myInit);
fetch(myRequest)
.then(function(res){
    return res.json();
}).then(function(data){
$('#user').append(data.firstName);
var array = new Uint32Array(1);
self.crypto.getRandomValues(array);
for (i = 0; i < array.length; i++) {
//   console.log("Your Reference Number is : " + array[i]);
$("#result").append("Your Reference Number is : " + array[i]);
}
})


