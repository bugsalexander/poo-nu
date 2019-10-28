# Directions to run the backend server

## Step 1: Running the mySQL server

You may need to download mySQL. This can be done by running `sudo apt-get install mysql-server` on a linux distro with APT.

Next, you may need to jump through some hoops to first add yourself as a user, and then set your password to native_auth something my_sql_password.

Finally, you need to launch mySQL. This can be done by running the command `sudo service mysql start`, and then opening the sql repl: `mysql -u <USERNAME>`.

Then run the database file using `source /PATH/TO/DATABASE/FILE.sql`. Then exit mysql REPL using quit.

The database should then be up. You can check its status using `sudo service mysql status`. You can stop the server by running the same command, replacing `status` with `stop`.

By default, the SQL server is hosted on port 3306.

## Step 2: Running the Apollo server

In order for the server to run, it has to be able to communicate with the SQL database. This means it needs the login credentials used to initially launch the server. To do so, you must provide a file named `mysql_login.txt` located at `./database/mysql_login.txt`. It should be JSON, formatted in the following manner:

```
{
  "host": "localhost",
  "user": <YOUR_USER_NAME_HERE>,
  "password": <YOUR_PASSWORD_HERE>,
  "database": "poonu"
}
```

To launch the Apollo server, then navigate to the backend directory, and run `yarn` or `npm install`, followed by `yarn server` or `npm run server`. The Apollo server should then be running, displayed with a message. The server currently prints out the requests it receives, and the passed-back data.

To see the status of the server, run `npm run status`, and to stop it, run `npm run stop`.

By default, the Apollo server listens on port 4000.
