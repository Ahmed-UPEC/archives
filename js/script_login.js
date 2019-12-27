$( document ).ready(function() {
    $("body").fadeIn(1500)
    $("#myAlert").hide()

    var compte = [
        {
            username: "invite",
            password: "invite"
        },
        {
            username: "alpha",
            password: "alpha"
        },
        {
            username: "gpequignot",
            password: "ahmed01"
        }
    ]
    
    function verifyAccount() {
        var username = $("#username").val()
        var password = $("#password").val()
        for (var i = 0; i < compte.length; i++) {
            if (username == compte[i].username && password == compte[i].password) {
                //window.location.href = "C:/Users/Ahmed_Syed/Desktop/UPEC/html/main_page.html"
                $("#login").fadeOut()
                $("body").append("<section id='kitty'><div class='container'><div class='row'><div class='col-md-3'></div><div class='col-md-6 main_col2'><div class='progress'><div class='progress-bar progress-bar-striped bg-success' id='cat' role='progressbar' style='width: 1%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div></div></div><div class='col-md-3'></div></div></div></section>")
                $("#cat").animate({width: "12%"},1000, function(){
                    $("#cat").animate({fontsize: "15px"},function(){
                        $("#cat").animate({width: "50%"},1500, function(){
                            $("#cat").animate({fontsize: ""},function(){
                                $("#cat").animate({width: "100%"},2000, function(){
                                    $("#cat").animate({fontsize: ""}, 1000, function(){
                                        window.location.href = "../html/main_page.html"
                                        //document.location.href="https://github.com/Ahmed-UPEC/upec/html/main_page.html";
                                    })
                                })
                            })
                        })
                    })
                }) 
                return;         
            }
        }
    $("#myAlert").fadeIn(500)
    }

    $("button").click(function(e){
        e.preventDefault()
        verifyAccount()
    })

    

});
