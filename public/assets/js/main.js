$('.submitSearch').submit((e) => {
    e.preventDefault();
    let search = $('input[name="searchUser"]').val()
    $.ajax({
        type: "post",
        url: "/search-user",
        data: {
          searchUser: search,
        },
        dataType:'json',
    
    }).done((response) => {
        $('.listUserView li').remove();
        
         if(response.status == 'OK'){
          response.data.forEach(item => {
            
            $('.listUserView').append(`
                <li>
                  <a href="/messages/${item.id}" style="text-decoration: none;">
                  <div class="listUserItem">
                    <img src="/assets/img/profile.svg" alt=""/>
                    <div class="itemInfo">
                        <h4>${item.username}</h4>
                        <p>Member</p>
                    </div>
                  </div>
                </a>
              </li>`)
          })
        }else{
            $('.alert-dismissible').removeClass('hidden').html('<strong>Error! </strong>' + response.data.message)
        }
            
    
    });
})
$(document).ready(function () {
  var messagesEle = document.getElementById("messages");
  messagesEle.scrollTop = messagesEle.scrollHeight;
});
const renderMessage = (socket, userCurrent) => {
  var messagesEle = document.getElementById("messages");
  socket.on("new_user_join", function (msg) {
      new Noty({
        theme: "relax",
        text: "Some notification text",
        progressBar: true,
        timeout: 1000,
      }).show();
    });

    socket.on("chat message", function (msg) {
      var item = document.createElement("li");
      var div = document.createElement("div");
    
      div.classList.add("messageContent");

      if (userCurrent == msg.id ) {
        item.classList.add("me");
        div.classList.add("me");
        div.textContent = msg.message;
      } else {
        var img = document.createElement('img');
        img.classList.add('iMsgContent');
        img.src = "/assets/img/profile.svg"
        item.appendChild(img)
        div.textContent = msg.user + ": " + msg.message;
      }
      item.appendChild(div)
      messagesEle.appendChild(item);
      setTimeout(() => {
        var elem = document.getElementById("messages");
        elem.scrollTop = elem.scrollHeight;
      }, 500);
    });
}