# Lanzii Request Library

Lanzii is a minimal and flexible wrapper for creating API services with optional request interception.  
This library is ideal for cleanly organizing API logic in modular or scalable frontend applications.

---

## ✨ Features

- Simple API service creation
- Optional request interception
- Configuration-driven request builder
- Works well with multiple microservice endpoints
- Lightweight and easy to extend

---

## 📦 Installation

```bash
npm install lanzii
```

## Usage 

```js
import {AppApi} from 'lanzii';
```

## Create api service

```js
const api = AppApi.createApiService({
  baseURL: 'https://api.example.com',
  headers: { 'Content-Type': 'application/json' },
});

```

## Add a request interceptor

```js
const api = AppApi.createApiService(
  {
    baseURL: 'https://api.example.com',
  },
  (props) => {
   

    return {
      ...props,
      headers: {
        ...props.headers,
        Authorization: 'Bearer token_123',
      },
    };
  }
);
```

## Using API endpoints

```js
const userApi = AppApi.createApiService({ baseURL: '/users' });


userApi.get('/profile');

// POST example
userApi.post('/update', { name: 'Alice' });
```

| Parameter          | Type  | Default            | Description                                                   |
| ------------------ | ----- | ------------------ | ------------------------------------------------------------- |
| `apiServiceConfig` | `any` | —                  | Configuration object passed into `apiCreate`.                 |
| `onRequest`        | `any` | `(props) => props` | Optional interceptor allowing you to modify request metadata. |

## 🧰 CRUD Helpers

```ts
import { get, post, update, remove } from "lanzii";

get("/users");
post("/users", { name: "Alice" });
update("/users/1", { name: "Bob" });
remove("/users/1");
```

## 🌐 Low-Level Request

```ts
import { request } from "lanzii";

request({
  url: "/login",
  method: "POST",
  data: { username, password },
});
```

## 🏗 API Service Factory (Direct Access)

```ts
import { createApiService } from "lanzii";

const api = createApiService({ baseURL: "/products" });
```

| Export             | Description                                  |
| ------------------ | -------------------------------------------- |
| `appApi`           | Singleton instance for creating API services |
| `createApiService` | Direct API service factory                   |
| `get`              | GET request helper                           |
| `post`             | POST request helper                          |
| `update`           | PUT / PATCH request helper                   |
| `remove`           | DELETE request helper                        |
| `request`          | Low-level request executor                   |
| `setUpRedux`       | Redux integration setup                      |

# Documentation

Docs coming soon!

we are currently working on our documentation with the help from our first ever collaborater @ntsakosuprise

# Questions & Support

For questions and support please use sukujs's Suppport page on [Github repo](https://github.com/ntsakosurprise/suku/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/suku/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/suku/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/suku/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/suku/development/CONTRIBUTING.md) before making a pull request. If you have an suku plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/suku/development/LICENSE.md) file for details.

copyright (c) 2018-present. Ntsako (Surprise) Mashele