# Users

Specialized user class called `Parse.User` that automatically handles much of the functionality required for user account management

`Parse.User` is subclass of `Parse.Object`. All the methods that are on `Parse.Object` also exist in `Parse.User`

## Parse.User Properties

- username (required)
- password (required on signup)
- email (optional)

## Signing Up

- Async create new user in Parse App
- Checks to makes sure bot username and email are unique
- Hashes password with bcrypt
- New Parse users should be created with the `signUp()` method not the `save()` method

```
const user = new Parse.User();
user.set("username", "my name");
user.set("password", "my pass");
user.set("email", "email@example.com");

// other fields can be set just like with Parse.Object
user.set("phone", "415-392-0202");
try {
  await user.signUp();
  // Hooray! Let them use the app now.
} catch (error) {
  // Show the error message somewhere and let the user try again.
  alert("Error: " + error.code + " " + error.message);
}
```

## Logging In

```
const user = await Parse.User.logIn("myname", "mypass", { usePost: true });
// Do stuff after successful login.

// Default to Get request
const user = await Parse.User.logIn("myname", "mypass");
// Do stuff after successful login.
```

## Current User

- When every you use `signUp` or `login` methods user is cached in localStorage
- Can configure this storage via `Parse.setAsyncStorage()` method
- You can treat this cache as a session and automatically assume the user is logged in

```
const currentUser = Parse.User.current();
if (currentUser) {
    // do stuff with the user
} else {
    // show the signup or login page
}
```

You can clear the current user by logging them out

```
Parse.User.logOut().then(() => {
  const currentUser = Parse.User.current();  // this will now be null
});
```

## Security For User Objects

- `Parse.User` class is secured by default
- Data stored in `Parse.User` can only be modified by that user

Specifically, you are not able to invoke any of the save or delete methods unless the Parse.User was obtained using an authenticated method, like logIn or signUp. This ensures that only the user can alter their own data.

The following illustrates this security policy:

```
const user = await Parse.User.logIn("my_username", "my_password");
user.set("username", "my_new_username");
await user.save();
// This succeeds, since the user was authenticated on the device

// Get the user from a non-authenticated method
const query = new Parse.Query(Parse.User);
const userAgain = await query.get(user.objectId);
userAgain.set("username", "another_username");
await userAgain.save().catch(error => {
  // This will error, since the Parse.User is not authenticated
});
```

The Parse.User obtained from Parse.User.current() will always be authenticated.

## Security For Other Objects

- The same security of Parse.User can be applied to other objects as well.
- Each object has a ACL (Access Control List) implemented by Parse.ACL class.

- Read or Write owner only (Private)

```
const Note = Parse.Object.extend("Note");
const privateNote = new Note();
privateNote.set("content", "This note is private!");
privateNote.setACL(new Parse.ACL(Parse.User.current()));
privateNote.save();
```

- Add permissions to Parse.ACL using `setReadAccess()` and `setWriteAccess()`

- Group access example

```
const Message = Parse.Object.extend("Message");
const groupMessage = new Message();
const groupACL = new Parse.ACL();

// userList is an array with the users we are sending this message to.
for (let i = 0; i < userList.length; i++) {
  groupACL.setReadAccess(userList[i], true);
  groupACL.setWriteAccess(userList[i], true);
}

groupMessage.setACL(groupACL);
groupMessage.save();
```

- Grant premissions to all users at once using `setPublicReadAccess` and `setPublicWriteAccess`.

```
const publicPost = new Post();
const postACL = new Parse.ACL(Parse.User.current());
postACL.setPublicReadAccess(true);
publicPost.setACL(postACL);
publicPost.save();
```

## Resetting Passwords

```
Parse.User.requestPasswordReset("email@example.com")
.then(() => {
  // Password reset request was sent successfully
}).catch((error) => {
  // Show the error message somewhere
  alert("Error: " + error.code + " " + error.message);
});
```

- This will match given email with user's email or username field and semd them a password reset email.

How this process works:

1. User request that their password be reset by typing in their email
2. Parse sends and email to their addrdss with a special password reset link.
3. User clicks on the reset link and is directed to a special Parse page that will allow them tupe in a new password
4. User types in a new password. Their password has now been reset to a value they speicify.

Note that the messaging in this flow will reference your app by the name that you specified when you created this app on Parse.

## Querying

- To query users create a `new Parse.Query(Parse.User)` and pass it the `Parse.User`

```
const query = new Parse.Query(Parse.User);
query.equalTo("gender", "female");  // find all the women
const women = await query.find();
```

## Associations

- Associations involving a Parse.User work right out of box.

For example, let’s say you’re making a blogging app. To store a new post for a user and retrieve all their posts:

```
const user = Parse.User.current();

// Make a new post
const Post = Parse.Object.extend("Post");
const post = new Post();
post.set("title", "My New Post");
post.set("body", "This is some great content.");
post.set("user", user);
await post.save();
// Find all posts by the current user
const query = new Parse.Query(Post);
query.equalTo("user", user);
const userPosts = await query.find();
// userPosts contains all of the posts by the current user.
});
```
