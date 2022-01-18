# Offline-Messaging-Api
This is a offline messaging api that I made with javascript. I use javascript/nodejs as a runtime and JWT for authentication/Authorization.
## Build and run
You can run the server with
`
docker-compose up --build -d
`
and `
-npm install
`
`
-npm start
`
## Endpoints

### SignUp
-   method: `POST`
-   path: `/user/create`
-   body: 
    ```js
    {
        "username": string,
        "password": string
    }
    ```
-   response:
    ```js
    {
    "success": boolean,
    "message": string,
    }
    ```

### Login
-   method: `POST`
-   path: `/user/getToken`
-   body: 
    ```js
    {
        "username": string,
        "password": string
    }
    ```
-   response:
    ```js
    {
    "status": boolean,
    "token": string,
    }
    ```
### Block User
-   method: `POST`
-   path: `/user/blockUser`
   * Header:
  
        |  Name | Description                           | Type   |
        |:---------:|---------------------------------------|--------|
        | Authorization | authentication token of the user  | String |
-   body: 
    ```js
    {
        "blockedUser": string,
    }
    ```
-   response:
    ```js
    {
    "id": integer,
    "blockerUser": string,
    "blockedUser": string,
    "createdAt": string
    }
    ```

### Send Message
-   method: `POST`
-   path: `/message/create`
   * Header:
  
        |  Name | Description                           | Type   |
        |:---------:|---------------------------------------|--------|
        | Authorization | authentication token of the user  | String |
-   body: 
    ```js
    {
        "to": string,
        "content": string
    }
    ```
-   response:
    ```js
    {
    "id": integer,
    "from": string,
    "to": string,
    "content": string,
    "createdAt": string
    }
    ```
### Get Message History
-   method: `GET`
-   path: `/message/allMessages`
   * Header:
  
        |  Name | Description                           | Type   |
        |:---------:|---------------------------------------|--------|
        | Authorization | authentication token of the user  | String |
-   response:
    ```js
    {
    "id": integer,
    "from": string,
    "to": string,
    "content":string,
    "createdAt": string
    }
    ```
### Get Message History By User
-   method: `GET`
-   path: `/message/allMessagesBySender/:sender`
   * Header:
  
        |  Name | Description                           | Type   |
        |:---------:|---------------------------------------|--------|
        | Authorization | authentication token of the user  | String |
-   response:
    ```js
    {
    "id": integer,
    "from": string,
    "to": string,
    "content":string,
    "createdAt": string
    }
    ```
