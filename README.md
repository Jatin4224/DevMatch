# DevMatch

# Ep-04

-install postman app
-create workspace/collection make a test api get call

-write logic to handle all the post,put,patch,delete,get api calls on postman

-advance routing concepts

# Ep-05

-multiple route handlers
-next()
-net fucntion and errors along with res.send()
-app.use("/route",rh,rh2,[rh3,rh4],rh5)
-MiddleWares
-how express js handles req behind the scenes
-app.use vs app.all
-write dummy auth middleware for the admin
-write a dummy auth middleware for all uesers routes, except /user/login

# EP-06

-create a free cluster on mongodb official website
-install mongoose
-connect your application with your db /devmatch
-call the connect db function and connect to db before starting port .
-create a userSchema and user Model
-create post /signup api to add data to db
-push some documents using apis calls from postman
-error handling using try catch.
-try all this without seeing video.

# EP-07

-what is the diffrn btwn json nd js object
-Add the express.json middleware to your app
-make your sign up api dynamic to resolve your data.
-userfindOne with duplicate email id's which object returend
-make API - GEt user by email
-make API - GET /FEED - get all users from the db
-create the DELETE USER API
-difference btwn patch and put
-create a update the user API
-explore mongoose docs spcly for models , options in a model.findOneAndUpdate.
-create an API which update the user with email id .

# EP-08

-Explore schamatype options from the documents
-add required, unique, lowercase,min,minLength,trim
-add default
-create a custom validate function for gender
-improve db schema - put all appropriate validations on each field in schema
-Add timestamps to the user schema
-ADD API level validations on patch request and signup post api
-add api validation for each field
-install validator
-explore validator librariesread documentation
-use it for email,pass,photourl
-never trust req.body

# EP - 09

-validate data in signup API
-install bcrypt package
-create passwordHash using brcypt.Hash & save the user is encrypted password.
-create login api
-compare passwords and throw errors if email or password is invalid

# EP- 10

-install jsonwebtoken nd cookieparser
-send dummy cookie to user
-get profile api nd check if u get the cookie back /res.cookie
-create jwt token send it to user
-read cookie inside the profile api nd get the user who is logged in
-write useraUTH MIDDLEWARE
-add userauth middleware in profile api nd connection request api
-set the expiry of jwt token nd cookies for 7days .
-create userschema method to get jwt
-create userSchema method to compare passwords

# EP - 11

-EXPLORE read docs for express.Router
-create routes folder for managing auth,profile,request routers
-create routers - auth , profile, request
-import this routers in app.js
-create POST /Logout API
-create PATCH /profile/edit
-create PATCH /profile/password API => forgot passwod API
-Make you validate all data in every POST,PATCH API'S

# EP - 12

-Create connection request schema
-send connection request Api create
-do proper validation of data
-think about all the corner cases
-$or , $and query in mongoose read and read more about logicval queries
-schema.pre("save") function.
-Read more about indexes in MONGODB
-why do we need an index
-what is the pros and cons of creating indexes.
-what if i create lot of indexes?disadvantages
-main line - always think about cornes cases so make secure api from attackers.

# EP-13

-write code with proper validations for POST/REQUEST/REVIEW/:STATUS/:REQUESTID

-thought process - POST VS GET
-how can attacker exploit your post api by sending some malesious data into db. think attacker as this attacker can put something into db
.save() line will be the second last line of your api before it just write lots of validations.

-Now, in GET api we will 100% sure that the user is authorized dn loggedin user is verified user nd user is requesting correct data within his scope.

-create API- /user/requests/receieved

-create API-/user/connections

//this will give the matches - means it gives u information about who is connected to you.

userRouter.get("/user/connections",userAuth, async(req,res)=> {
//suppose setu sent request to jatin and jatin accepted it now setu nd jatin both can see information about new connection.
//so you have to find it from connectionRequests connections, and we are concern about status accepted only.
then we will check whether the login user is fromuser it or toUserId.

//setu -> jatin => accepted
//jatin => mark => accepted
const connectionRequests = await Connection.find({

})
})
