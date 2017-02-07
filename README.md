# Node Assessment

## setup
1. Run `npm install` to install testing dependencies.
2. Create a file called `server.js`. All your server code and endpoints should be in this file.
3. Create a file called `userCtrl.js`. You will write your endpoints and export each one from this file.

## Users Module
You will be using the users module in your test. It is located in the file `users.js`

The users module is intended to be your way of controlling the data.
Do not make any changes to this file. Make sure you only use
`users.js` to make all your changes to the data.

A user has the following keys and values:

```
id: number
first_name: string
last_name: string
email: string
gender: string,
language: string,
age: number,
city: string,
state: string,
type: string,
favorites: array of strings
```

The users module has the following methods:

#### Add
* Add a properly formatted user.
* This will throw an exception if the user is improperly formatted!
* Will automatically add an id and return the new user object, with the id.
So don't put an id on a new user!

#### findOne
* Takes in a key and a value
* Returns the first user where the key matches the value
* Example:
```
users.findOne('id', 1) // User object with an id of 1;
```

#### find
* Takes in a key and a value
* Like findOne but it will return all matching users as an array
* If it only finds one user it will still return an array.

#### remove
* Takes in a key and a value
* Like find but will remove all matching users.

## User Controller
1. Get All Users.
..*Write a function called readAll that will return all users from the users module.
2. Get User By Id.
..*Write a function called findUserById that will take in a userId, use that to find the user with that id and return that user's information. If there is no user with that ID, return null.
3. Get All Admin Users.
..*Write a function called getAdmins which will return an array of all users with a type of 'admin'. Return null if none are found.
4. Get All Non Admin Users (regular users)
..*Write a function called getNonAdmins which will return an array of all users who do not have a type of 'admin'. Return null if none are found.
5. Get All users with a specified favorite.
..*The function getUsersByFavorite will take in a string, favorite, and use it to return all users with that favorite in their favorites array. If none are found, return null.
6. Get all users with age under given age.
..*Write a function, getUsersByAgeLimit, that will take in an age and return all users under the age provided. If none are found, it will return null.
7. Get User By Last Name.
..*Write a function called findUserByQuery. This function will take in two parameters: a query term and the value. If the query term is 'last_name', the function will use the value parameter to return the user (or users) with that last name. Make sure that the search is case-insensitive. If the user is not found, return null.
8. Get User By Email.
..*Adjust findUserByQuery to search for a user by email, if the query term equals 'email'. Again, it will search using the value parameter, return that found user, or if not found, return null.
9. Add new user.
..*Write a function, createUser, that takes a user object as a parameter to the users module. Create a user using this object. Remember, the users module will generate an id itself, so you don't have to. If the user is not in the correct format, the users module will give you an error. If there is an error from the users module, return null. Otherwise, return the new user (with automatically generated id).
10. Update user by ID.
..*Write a function called updateUser which will take in a userId and an object. The object will contain the properties that need to be changed, along with their new values. Find a user by the id, then update it, changing only those properties sent in the object. Return the updated user.
11. Delete a user by ID.
..*Your function, removeUser, should take in a userId, find a user by that id, then use the user module's remove functionality to delete the user. Return the deleted item.

## Endpoints
Once you are finished with your controller, write endpoints that will accept the test's requests:

1. `'GET' /api/users`
Respond with an array of all users, with status 200.

2. `'GET' /api/users/` + userId
The test will a GET request with the userId as a parameter to this endpoint. If the user is found, respond with status 200 and send that user information. If no user was found, responsd with a status 404.

3. `'GET' /api/users/`
## Running Tests

Tests can be run automatically. After setup, run `npm test` to check tests.

If you want, you can have tests run in watch mode, where tests will run again after files change.
Run `npm test -- --watch` for watch mode.

## About the testing software

The testing software runs automatically. It will test your code endpoint by endpoint
and piece by piece. It is important that you name your module methods and files exactly according to the instructions.

A lot of times a failing test indicates something wrong with your code. Students are naturally suspicious of the testing software.
If you think there is something wrong with the testing software, ask a mentor to look at your answer.
A mentor can tell you whether the testing software is wrong or whether you are, but cannot tell you the answer.

If you find a test that is not working correctly, or that you think is testing incorrectly, please create an issue on Github.