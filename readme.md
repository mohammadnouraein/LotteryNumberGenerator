# Lottery Number Generation for Birkle-IT
This is a project with 4 part.
1. Server socket for serving random numbers between 1 and 100.
2. Client socket for connecting to the server socket.
3. Http server app for serving the result of fetched data to web client.
4. Simple web client for viewing the result.

# Fast help

1. run `npm i`
2. run `npm run server`
3. run `npm run http-server`
4. open [http://localhost:3000]() on browser (chrome or firefox prefered)


# Installation construction in detail

1. install dependencies\
For installation just you need to install dependency packages.
    `npm i`  

2. build the application\
Before everything you need to build the project.\
    `npm run build`


3. run server socket component\
Start the server socket by running this command.\
    `npm run server`


4. run client socket component\
This part is not necessary bu you can run client socket for testing server, without http server.\ 
    `npm run client`


5. run http server\
For viewing the result just run the below command and open [http://localhost:3000]()
    `npm run http-server`\
    or you can run the below command to watch the changes
    `npm run watch`

6. run linter.
    `npm run lint`


