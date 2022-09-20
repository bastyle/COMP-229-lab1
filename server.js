const exp = require("express");
const res = require("express/lib/response");
const app = exp();

//routing functions
//http:localhost:8080/
app.get("/", function (req, resp) {
    resp.send("home page")
});

//http:localhost:8080/about_us
app.get("/about_us", function (req, resp) {
    resp.send("about us page")
});

app.get("/products", function (req, resp) {
    resp.send("products page")
});

app.get("/login", function (req, resp) {
    resp.send("GET login page")
    
});

app.post("/login", function (req, resp) {
    resp.send("Post login page")
    next()
});


//middleware function 3 parameters
function test(req, res, next){
    console.log("test middleware")
    next();
}


app.use(test);

app.use(function(req, res){
    res.send("page not found.")
});


var port = process.env.PORT || 8080;
app.listen(port);
