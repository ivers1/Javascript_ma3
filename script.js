//Console.log out elements in JSON file
$(window).on("load", function() {
      
info = [{"id" : "12312412312", "name" : "Ecuaciones Diferenciales", "url" : "/video/math/edo/12312412312s", "author" : "", "name_author" : "Alejandro Morales", "url_a" : "/author/alejandro-morales", "type" : "master" }];

(function() {
    var myinfo = JSON.parse(info);
    console.log(myinfo[0].id);
    console.log(myinfo[0].name);
    console.log(myinfo[0].url);
    console.log(myinfo[0].author);
    console.log(myinfo[0].name_author);
    console.log(myinfo[0].url_a);
    console.log(myinfo[0].type);
})()
}









