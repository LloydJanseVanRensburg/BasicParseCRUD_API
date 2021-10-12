# Roles

Parse supports `Role Based Access Control` using `Parse.Role` subclass of `Parse.Object`.

Roles provide a logical way of grouping users with common access privileges to your Parse data.

Roles are named objects that contain users and other roles.

Any permission granted to a role is implicitly granted to its users as well as to the users of any roles that it contians.

## Parse.Role Properties

- name (required - only be set on init)
- users (A relation to the set of users that will inherit permissions granted to the containing role.)
- roles (A relation to the set of roles whose users and roles will inherit permissions granted to the containing role)

## Security For Role Objects

`Parse.Role` uses the same security scheme (ACL) as all other objects, except it requires an ACL to be set `explicitly`

Only users with master or administrator should be able to create or modify a Role. So you should define its ACLs accordingly

To create a new Parse.Role, you would write:

```
// By specifying no write privileges for the ACL, we can ensure the role cannot be altered.
const roleACL = new Parse.ACL();
roleACL.setPublicReadAccess(true);
const role = new Parse.Role("Administrator", roleACL);
role.save();
```

You can add users and roles that should inherit your new role’s permissions through the “users” and “roles” relations on Parse.Role:

```
const role = new Parse.Role(roleName, roleACL);
role.getUsers().add(usersToAddToRole);
role.getRoles().add(rolesToAddToRole);
role.save();
```

Take great care when assigning ACLs to your roles so that they can only be modified by those who should have permissions to modify them.

## Role Based Security For Other Objects

Each `Parse.Object` can specify a `Parse.ACL`, which provides an `access control list` that indicates which `users` and `roles` should be granted `read` or `write` access to the object.

Giving a role read or write permission to an object is straightforward. You can either use the Parse.Role:

```
const moderators = /* Query for some Parse.Role */;
const wallPost = new Parse.Object("WallPost");
const postACL = new Parse.ACL();
postACL.setRoleWriteAccess(moderators, true);
wallPost.setACL(postACL);
wallPost.save();
```

You can avoid querying for a role by specifying its name for the ACL:

```
const wallPost = new Parse.Object("WallPost");
const postACL = new Parse.ACL();
postACL.setRoleWriteAccess("Moderators", true);
wallPost.setACL(postACL);
wallPost.save();
```

## Role Hierarchy
