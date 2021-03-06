/* global Backendless */

$(function (){
   var APPLICATION_ID = "5A440563-A0F5-12D8-FFA2-E5CE3907D400",
       SECRET_KEY = "D3E79385-74E2-3838-FF6D-0B7EA9CCFC00",
       VERSION = "v1";
       
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    /*
    var dataStore = Backendless.Persistence.of(Posts);
    var post = new Posts({title: "My First Blog Post", content: "My first blog post content", email:"caitlinlopez28@gmail.com"});
    dataStore.save(post);
    */
   
    
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper('format', function (time) {
        return moment(time).format("dddd, MMMM Do YYYY");
    });
    
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
   
    $('.main-container').html(blogHTML);
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}