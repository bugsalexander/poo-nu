# Directions to run the backend server

## Step 1: Running the mySQL server

You may need to download mySQL. This can be done by running `sudo apt-get install mysql-server` on a linux distro with APT.

Next, you may need to jump through some hoops to first add yourself as a user, and then set your password to native_auth something my_sql_password.

Finally, you need to launch mySQL. This can be done by running the command `sudo service mysql start`, and then opening sql `mysql -u USERNAME`.

Then run the database file using `source /PATH/TO/DATABASE/FILE.sql`. Then exit mysql REPL using quit.

The server should be up. You can check its status using `sudo service mysql status`. You can stop the server by replacing `status` with `stop`.

## Step 2: Running the Apollo server

Navigate to the backend directory, and run `yarn server` or `npm run server`. This assumes that you have already run `npm install`.