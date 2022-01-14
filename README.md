# **Shopify Internship CRUD Challenge**
By: Sam Bassong

## **Description**
### Full CRUD inventory tracking web application. Submisison for Backend and Infrastructure internship application with Shopify

## **Technologies**
*  [Express](https://expressjs.com/) 
*  [Node.js](https://nodejs.org/en/)
*  [PostgreSQL](https://www.postgresql.org/)

## **ORMs**
*  [Sequelize](https://sequelize.org/master/)

***

## **Requirements for machine**
Node, npm, and PostgreSQL are necessary to run this application. If needed, please follow the installation guidelines **[below](#requirements)**

***

## **Getting Started**
 Once the requirements are met, we're ready to run the application. Follow the steps below to set up and launch the application server.

1. Copy this repo's SSH URL link and clone it onto your local machine via your terminal with the command:
    ```sh 
    git clone git@github.com:sbassong/shopify-crud-challenge.git
    ```
1.  Change directory into the newly cloned folder:
    ```sh 
     cd shopify-crud-challenge
    ```
1.  Install all dependencies with 
    ```sh 
    npm install
    ```
1.  Install the sequelize-cli with 
    ```sh 
    npm install -g sequelize-cli
    ```
1.  Use the sequelize-cli to create the `inventory` database on postgres (Uses config.json to name the database)
    ```sh 
    sequelize db:create
    ```
1.  Migrate the database with app's models with 
    ```sh 
    sequelize db:migrate
    ```
1.  *Recommended*: Run the following to seed the database with some initial products/items already set up in the `seeders/20220113010356-products.js` file

    *Feel free to modify the products or add your own, following the Item model guidelines*

    ```sh 
    sequelize db:seed:all
    ```
1.  Finally, run the server with
    ```sh 
    npm run dev 
    ```
***

## **Manual testing**
* I recommend using Either [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download) to test the following endpoints.

    ### *Endpoints*:
    Replace `<placeholder>` with appropriate values and supply both PUT and POST request with a JSON body following the Item model

    * POST: *Create inventory items* -> `http://localhost:3001/inventory/item/create`
    * PUT: *Edit inventory items* -> `http://localhost:3001/inventory/update/<item_id>`
    * DELETE: *Delete inventory items* -> `http://localhost:3001/inventory/delete/<item_id>`
    * GET: *View a list of inventory items* -> `http://localhost:3001/inventory/items`
    * GET: *Filter inventory items by query (name, category, or price)* -> `http://localhost:3001/inventory/items/filter/<query>`

    <br>

* **Alternatively**, use the following curl commands to test the api on your terminal

    *Add the `-v` flag after `curl` to return a more verbose/informative response*

    * *Create inventory items*

            curl -X POST http://localhost:3001/inventory/item/create -d <JSON data object>

    * *Edit inventory items*
    
            curl -X PUT http://localhost:3001/inventory/update/<item_id> -d <JSON data object>

    * *Delete inventory items*

            curl -X DELETE http://localhost:3001/inventory/delete/<item_id>

    * *View a list of inventory items*
    
            curl -X GET http://localhost:3001/inventory/items 

    * *Filter inventory items by query (name, category, or price)*
    
            curl -X GET http://localhost:3001/inventory/items/filter/<query>

***

## **Requirements**
<details>
Node, npm, and postgreSQL are necessary to run this application. please follow the installation guidelines below:

* ### ***Node + npm***
    * *Recommended*: Go to the Node Version Manager ([NVM](https://github.com/nvm-sh/nvm)) github and follow the instructions to install both both Node and npm
    * *Alternatively*: Go to [Node.js](https://nodejs.org/en/) and use the installer appropriate for your system to install node and npm

        *Verify that both node and npm have been installed by running the following in your CLI*

            node -v
            npm -v

* ### ***PostgreSQL***
    * Head to the official [PostgreSQL](https://www.postgresql.org/download/) documentation, choose your operating system family and follow your preferred installation route
    * My preferred installation method for Linux/MacOS:

        1. install homebrew by running this command in your termninal

                /bin/bash -c "$(curl -fsSL https://raw githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        2. follow this each of the following line **one by one**

            use brew to install postgres

                brew install postgres
            
            confirm installation with:

                postgres --version

            To start Postgres and keep it running on your machine

                brew services start postgresql

            To test the above, create a database with your local profile/account name

                createdb <account name>
            
            Confirm you can enter the postgres shell with the following command:
            
                psql

            Exit shell with:

                \q

* Alternatively, cURL is also an option.
</details>
