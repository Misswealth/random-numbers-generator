// var array = new Uint32Array(5);
// self.crypto.getRandomValues(array);

// console.log("Your lucky numbers:");
// for (i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }


$( "#myRef" ).validate({
    rules: {
        inputEmail4: {
        required: true,
      },
      inputPassword4: {
        required: true,
        rangelength: [4, 7],
      }
    }
  });

$('#register').on("click", function(e){
    $.ajax({
        url: "sign-up.html",
        context: document.body
      }).done(function(data) {
        // console.log(data);
        $('.container').html(data);
      });
})

$('#get-ref').on("click", function(e){
  e.preventDefault();
  let email = $('#inputEmail4').val();
  let password = $('#inputPassword4').val();
  // console.log(email);
  // console.log(password);
  if (email != '' && password != '') {
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
        if (email == data.data.email && password == data.data.password){
          console.log("welcome Fred!");
          // window.location.href = "get-reference.html"
          $.ajax({
            url: "get-reference.html",
            context: document.body
          }).done(function(data) {
            // console.log(data);
            $('.container').html(data);
          });
        }else {
          console.log('error');
        } 
      })
  }
})

// const myInit = {
//   method: 'Get',
//   headers: {
//       'content-Type': 'application/json'},
//   mode: 'cors',
//   cache: 'default'};
//   let myRequest = new Request('users.json', myInit);
//   fetch(myRequest)
//   .then(function(res){
//       return res.json();
//   }).then(function(data){
//       console.log(data.firstName);
//       console.log(data.data.email);
//   })