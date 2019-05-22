# Lottery Number Generation
This is a project with 4 part.\
1. Server socket for serving random numbers between 1 and 100.\
2. Client socket for connecting to the server socket.\
3. Http server app for serving the result of fetched data to web client.\
4. Simple web client for viewing the result.\

# Fast use

1. run `npm i`\
2. run `npm run server`\
3. run `npm run http-server`\
4. open [http://localhost:3000] on browser (chrome or firefox prefered)


# Installation construction in detail
For installation just you need to install dependency packages.\
1. install dependencies\
    `npm i`  

Before everything you need to build the project.\
2. build the application\
    `npm run build`
    in build procedure\

Start the server socket by running this command.\
3. run server socket component\
    `npm run server`

This part is not necessary bu you can run client socket for testing server, without http server.\ 
4. run client socket component\
    `npm run client`

For viewing the result just run the below command and open [http://localhost:3000]
5. run http server\
    `npm run http-server`\
    or you can run the below command to watch the changes
    `npm run watch`\

6. run linter
    `npm run lint`
