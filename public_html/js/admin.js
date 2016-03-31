$(function (){
   var APPLICATION_ID = "5A440563-A0F5-12D8-FFA2-E5CE3907D400",
       SECRET_KEY = "D3E79385-74E2-3838-FF6D-0B7EA9CCFC00",
       VERSION = "v1";
       
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);    
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}


