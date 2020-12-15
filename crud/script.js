// $(document).ready(function(){
//     var dum_url="https://reqres.in/api/users?page=2";
//     var our_cardhtml="";
// $.ajax({
//     method:GET,
//     url:dum_url,
//     success:function(resdata){
//         console.log(resdata.data)
//         var my_data=resdata.data;
//         my_data.map(function(vall){
//             // console.log(vall.first_name);
//             our_cardhtml+=`
//             <div class="demmy_card">
//             <h1>Name:`+vall.first_name+`</h1>
//             <P>email:`+vall.last_name+`</P>
//             <p>id:`+vall.id+`</p>
//         </div>
//             `
//         })
//         $(".cards_list").html(our_cardhtml)
//     }

// });
// });




$(document).ready(function(){
    $(".my_form").submit(function(e){
        e.preventDefault();
        
       
     var name_da = $(".name_data").val();
     var email_da = $(".email_data").val();
     var pass_da = $(".pass_data").val();

     var our_data={
         "name":name_da,
         "email":email_da,
         "pass":pass_da,
         "type":"insert_data"
     }

     $.ajax({
        type: "POST",
        url: "send.php",
        data: our_data,
        success: function(result) {
            console.log(result);
        }
    });
});
});



