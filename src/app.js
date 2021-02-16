const express=require("express")
const app=express();
const path=require("path");
const hbs=require("hbs");
const host="127.0.0.1";
const port=process.env.PORT || 80;

const static_path=path.join(__dirname,"../public");
const views_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.static(static_path))

app.set("view engine","hbs")
app.set("views",views_path)
hbs.registerPartials(partials_path)


app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/projects",(req,res)=>{
    res.render("projects");
});
app.get("*",(req,res)=>{
    res.write(`<h1>Ooopss...page not found</h1>`);
});

app.listen(port,()=>{
    console.log(`your server is running on http://${host}:${port}`)
})