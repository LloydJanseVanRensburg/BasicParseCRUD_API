# Sessions

Sessions represent an instance of logged in user.
They are automatically created when log in or sign up occurs
Deleted automatically when logout happens

Session objects are stored on Parse in the Session class

Session is subclass of Parse.Object

## Session properties

- sessionToken (readonly)
- user (readonly)
- createdWith (readonly)
- expiresAt (readonly)
- installationId (can be set only once)

## Handling Invalid Session Tokens

```
function handleParseError(err) {
  switch (err.code) {
    case Parse.Error.INVALID_SESSION_TOKEN:
      Parse.User.logOut();
      ... // If web browser, render a log in screen
      ... // If Express.js, redirect the user to the log in route
      break;

    ... // Other Parse API errors that you want to explicitly handle
  }
}

// For each API request, call the global error handler
query.find().then(function() {
  ...
}, function(err) {
  handleParseError(err);
});
```

## Session Security

- Session Objects can only be accessed by the user specified in the user field.
- Session ACL [read && write] for session user only
