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
import AppApi from 'lanzii';
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
    console.log('Intercepting request:', props);

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
