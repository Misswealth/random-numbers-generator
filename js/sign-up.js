$( "#signUp" ).validate({
    rules: {
        regFirstName: {
        required: true,
      },
      regLastName: {
        required: true,
      },
      regNumber: {
        required: true,
        // rangelength: [4, 7],
        minlength: 11
      },
      regEmail4: {
          required: true,
          email: true
      },
      confirmEmail4: {
          equalTo: "#regEmail4"
      },
      regPassword4: {
          required: true,
          rangelength: [5, 8],
      },
      confirmPassword4: {
          equalTo: "#regPassword4",
      }
    }
  });

//   const myInit = {
//       method: 'Get',
//       headers: {
//           'content-Type': 'application/json'
//       },
//       mode: 'cors',
//       cache: 'default'
//   };
//   let myRequest = new Request('users.json', myInit);
//   fetch(myRequest)
//   .then(function(res){
//       return res.json();
//   }).then(function(data){
//       console.log(data.firstName);
//   })