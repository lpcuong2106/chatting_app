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
                <li >
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