function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }

  function changeUser(response) {
    $(".facebookLogin").hide();
    console.log(response);
    $("#name").text(response.name);
    $( "#photo" ).attr( 'src', src="https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12733965_563931377107605_4927476053108502122_n.jpg?oh=0cd08cd3dc3e59b49670dff4f38f3741&oe=5766CE93" );

  }

}