var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("<!DOCTYPE html> <html> <body> <a href='/'>Home</a> <a href='/about'>About Us</a> <a href='/contact'>Contact Us</a> <h1>Welcome to My Website</h1> <p><b>Important:</b> We Provides complete end to end services for IT Software Development and Training.</p> </body> </html>");
});

app.get('/about', function(req, res){
   res.send("<!DOCTYPE html> <html> <body> <a href='/'>Home</a> <a href='/about'>About Us</a> <a href='/contact'>Contact Us</a> <h1>About Us</h1> <p><b>Important:</b> We Provides complete end to end services for IT Software Development and Training.</p> </body> </html>");
});

app.get('/contact', function(req, res){
   res.send('<!DOCTYPE html><html><body> <a href="/">Home</a> <a href="/about">About Us</a> <a href="/contact">Contact Us</a> <h1>Contact Us Now</h1><form action="/contact2">      <label for="fname">First name:</label><br>     <input type="text" id="fname" name="fname" value="Adarsh"><br>     <label for="lname">Last name:</label><br>     <input type="text" id="lname" name="lname" value="Patel"><br><br>     <input type="submit" value="Submit">   </form> <p>If you click the "Submit" button, the form-data will be sent to a page called "/contact2".</p>   </body> </html>'); 
});

app.get('/contact2', function(req, res){
   res.send('Your First Name is: ' + req.query['fname'] + "\nYour Last Name is: " + req.query['lname']); 
});


app.listen(process.env.PORT || 8080);