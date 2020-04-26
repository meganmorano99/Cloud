# Makings with Megan Website

Makings with Megan Website API is a simple API organized around REST. 

## Core Resources

### Like Button

This is an object represents how many people like the Makings with Megan Page. There is only one option.

#### GET
This displays how many likes I will receive. When the page loads, the API Gateway gets called, then calls the reading function. The reading function returns how many likes are stored in my Dynamo DB table. 

**Sample Call**

This is a simple GET call, and requires no body.

**Sample Response**

```json
{
  "statusCode": 200,
  "body": {
    "Count": 420,
    "ScannedCount": 420
  },
  "headers": {
    "Access-Control-Allow-Origin": "*"
  }
}
```

#### POST

The post calls the API Gateway. Then it calls the POST function. The post stores a like in the Dynamo DB table. 

**Sample Call**

This POST call requires no body.

**Sample Response**

```json
{
  "statusCode": 201,
  "body": "",
  "headers": {
    "Access-Control-Allow-Origin": "*"
  }
}
```

### Food Generator

#### GET

This function displays what kind of food the person viewing the page should make. Either avocado toast or cookies. When the button is pressed, it calls the API Gateway. After, it calls the press function, which returns either option. 

**Sample Call**

This is a simple GET call, and requires no body.

**Sample Response**

```json
{
  "statusCode": 200,
  "headers": {
    "Access-Control-Allow-Origin": "*"
  },
  "body": "\"Cookies\""
}

