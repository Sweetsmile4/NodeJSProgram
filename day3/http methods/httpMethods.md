HTTP methods are the verbs used in web communication (like **GET, POST, PUT, DELETE**) that tell the server what action to perform on a resource. In Node.js, the built-in **`http` module** lets you handle these methods when building servers.  

---

## 🌐 What Are HTTP Methods?
HTTP methods define the type of operation a client (like a browser or API consumer) wants to perform on a server resource. They are part of the **request line** in an HTTP request.

### Common HTTP Methods
| **Method** | **Purpose** | **Example Use Case** |
|------------|-------------|-----------------------|
| **GET**    | Retrieve data from the server | Fetch a webpage or API data |
| **POST**   | Send data to the server | Submit a form or upload a file |
| **PUT**    | Update/replace a resource | Update user profile info |
| **DELETE** | Remove a resource | Delete a record from a database |
| **PATCH**  | Partially update a resource | Update only one field in a record |
| **HEAD**   | Same as GET but only headers | Check if a resource exists |
| **OPTIONS**| Ask server which methods are allowed | Preflight requests in CORS |

---

## ⚙️ Using HTTP Methods in Node.js
Node.js has a built-in **`http` module** that allows you to create servers and handle different methods.

### Example: Handling GET and POST
```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('You sent a GET request');
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('You sent a POST request with data: ' + body);
    });
  } else {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

## 🚨 Key Points to Remember
- **GET** → Safe, idempotent (doesn’t change server state).  
- **POST** → Not idempotent (creates new resources).  
- **PUT** → Idempotent (replaces resource).  
- **DELETE** → Idempotent (removes resource).  
- **PATCH** → Partial update, not always idempotent.  
- Node.js `http` module is **low-level**; for easier handling of methods and routes, frameworks like **Express.js** are often used.  

---
