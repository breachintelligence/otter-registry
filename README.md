# Otter Registry

Otter registry is a Lux Framework generated api server for saving and retreiving records about otters and their habitats.

## Installation

Requires node v12

*   `git clone https://github.com/breachintelligence/otter-registry`
*   `cd otter-registry`
*   `npm install`

## Seed database

* `lux db:reset`
* `lux db:migrate`
* `lux db:seed`

## Running / Development

*   `lux serve`


## Assignment

Generate a test suite using any free and easy to use lanaguage or framework that 

* validates expected behavior of each resource endpoint
* ensure CRUD operations against each resource work as expected
* ensure paging on the resources `GET` method works as expected

## GOAL

Provide a deliverable that can be used against a local dev version of this repository to verify any functionality in-scope breaking changes made by the evaluator are found by the testing suite.

## Resources
There are two main resources `Otters` and `Habitats`. There is a many to one relationship with Otters to Habitats.

### Habitats

The expected fields for Habitats are as follows:
```
  name:    /^[A-Za-z0-9 _.,!&"'/$-]{2,}$/
  address: /^[A-Za-z0-9 .#&',$]{2,}$/
  city:    /^[A-Za-z0-9 .,$]{2,}$/
  state:   /^[A-Za-z0-9 .$]{2,}$/
  zip:     /^[0-9]{5}(-[0-9]{4})?$/
  htype:   /^zoo|sanctuary|colony$/
```
### Otters

The expected fields for Otters are as follows:
```
  name: /^[\w'-]{2,32}(( [\w'-]{1,32})? [\w'-]{2,32})?$/ && clamp(0,99),
  age: isInteger && clamp(0, 99)
```

## Endpoints
Each resource endpoint implements

* `GET /{resource}` - Lists the resources
  * returns 200 and a resource array
* `POST /{resource}` - Creates a new resource (auth required)
  * returns the update resource (code 200)
* `PATCH /{resource}/:id` - Updates an existing resource  (auth required)
  * returns the updated resource (code 200)
* `DELETE  /{resource}/:id` - Deletes the resource (auth required)
  * returns a code 204 on success

### Paging 
The `GET` method accepts paging query parameters.
`?page[size]=2&page[number]=1`

### Filtering (out of scope)
The `GET` method accepts filtering query parameters
`?filter[age]=18`

### Sorting (out of scope)
The `GET` method accepts sorting query parameters
`?sort=-age`

### Habitats

```
{
  "data": [
    {
      "id": "1",
      "type": "habitats",
      "attributes": {
        "name": "Kemmer Inc",
        "address": "70622 Brett Bridge Apt. 678",
        "city": "New Dave",
        "state": "Alabama",
        "zip": "88867-4172",
        "htype": "sanctuary"
      },
      "relationships": {
        "otters": {
          "data": [
            {
                "id": "110",
                "type": "otters"
            },
            {
                "id": "401",
                "type": "otters"
            }
          ]
        }
      },
      "links": {
          "self": "http://localhost:4000/habitats/1"
      }
    },
  ...
],
  "links": {
    "self": "http://localhost:4000/habitats",
    "first": "http://localhost:4000/habitats",
    "last": "http://localhost:4000/habitats?page%5Bnumber%5D=2",
    "prev": null,
    "next": "http://localhost:4000/habitats?page%5Bnumber%5D=2"
  },
  "jsonapi": {
    "version": "1.0"
  }
}
```


### Otters

```
{
  "data": [
    {
      "id": "200",
      "type": "otters",
      "attributes": {
        "name": "Kennedi a Dooley",
        "age": 12
      },
      "relationships": {
        "habitat": {
          "data": null
        }
      },
      "links": {
        "self": "http://localhost:4000/otters/200"
      }
    },
    ...
  ],
  "links": {
    "self": "http://localhost:4000/otters",
    "first": "http://localhost:4000/otters",
    "last": "http://localhost:4000/otters?page%5Bnumber%5D=16",
    "prev": null,
    "next": "http://localhost:4000/otters?page%5Bnumber%5D=2"
  },
  "jsonapi": {
    "version": "1.0"
  }
}

```

## Authentication
For the purposes of this the concept of users is lightly implemented and can be ignored in testing purposes for the most part. The seed data adds a default user. All users have write access.

```
POST /users/login
{
    "data": {
        "type": "users",
        "attributes": {
            "email": "admin@localhost.domain",
            "password": "1234567890"
            }
    }
}
```

Will return a token that can be used as a query parameter to restricted resource methods.
```
{
    "data": {
        "token": "32f976136fe113e800649f92137f1348",
        "email": "admin@localhost.domain"
    }
}

```
For Example
```
POST /{resource}?token=32f976136fe113e800649f92137f1348
{
  "data": {
    ...
  }
}
```

Users have endpoints similar to the other resources that can be ignored but are available if needed to the authed user for creating or deleting other users.
```
GET /admin/users
POST /admin/users?token=
PATCH /admin/users/:id?token=
DELETE /admin/users/:id?token=
```



## Further Reading / Useful Links
*   [Lux](https://github.com/postlight/lux/)
