# Adonis API rest with JWT

About
Small application for the management of buildings, in order to know who enters and who leaves with their respective data such as the date and time, in addition to a black list where the people who cannot enter will be.

## Let us begin


1. Assuming you already downloaded the git.
2. Create a database with the name " api " , skip the quotes.
3. Then duplicate the .env.example file and rename it to .env, finally configure the connection to your mysql database in the DB_CONNECTION section onwards.

In this example we use mysql, although you can use other.

```bash
Deployment:

$ npm i
$ adonis key:generate
$ adonis migration:refresh --seed
$ adonis serve --dev


```


### Login to get the token

To test the application you can use postman and another that suits you.
```js
HTTP post /login

whit body parameters:

email: demo
password : demo
```

### New user example

```js
HTTP post /users

with header parameters

key: Authorization
value: Bearer <youTokenHere>

whit body parameters:

username     
email        
password
```

### Edit user example

```js
HTTP put /users/1

with header parameters

key: Authorization
value: Baerer <youTokenHere>

whit body parameters:

username     
email        
password
```

### Enter a user to a building !

```js
HTTP post /records

with header parameters

key: Authorization
value: Baerer <youTokenHere>

whit body parameters:

  fk_user_id       (from 1 to 10)
  fk_building_id   (from 1 to 5)
  action           (Boolean | 0 = In and 1 = Out)

note: from 1 to 2 the fk_user_id are blocked so you will get a message.
```
