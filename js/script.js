$(document).ready(function(event) {
    event.preventDefault;
    $('div#hidden').fadeIn(3000).removeClass('hidden');
    
    $('.question').on('click', '.button', function() {
        window.location = ('mailto:mixstixx@gmail.com?subject=' + $('input').val() );
        return false; 
        });
        
        
    $('#question').bind('keypress', function(e) {
        event.preventDefault;
        if(e.keyCode==13){
		window.location = ('mailto:mixstixx@gmail.com?subject=' + $('input').val() );
	}
    });
    
    
    var contactForm = document.getElementById('contact-form');
    var sendBtn = document.getElementById('send-button');
    var onMessageComplete = function(error) {
      sendBtn.disabled = false;
      if (error) {
        contactError.innerHTML = 'Sorry. Could not send message.';
      } else {
        contactSuccess.innerHTML = "Message has been sent.";
        // hide the form
        contactFrom.style.display = 'none';
      }
    };
    function sendMessage(formObj) {
        // Store emails to firebase
        var myFirebaseRef = new Firebase("https://torid-torch-7120.firebaseio.com");
        myFirebaseRef.push({
          name: formObj.name.value,
          email: formObj.email.value,
          message: formObj.message.value
        }, onMessageComplete);
        sendBtn.disabled = true;
        return false;
    }
    
});
