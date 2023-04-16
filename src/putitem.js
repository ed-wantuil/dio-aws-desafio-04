"use strict"

const {v4: uuidv4} = require('uuid');
const AWS = require('aws-sdk');

const insertItem = async (event) => {
    const createdAt = new Date().toISOString();
    const id = uuidv4();

    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const newItem = {
        id,
        item,
        createdAt,
        itemStatus: false
    }

    await dynamoDb.put({
        TableName: 'ItemTableNew',
        Item: newItem
    })

    return {
        statusCode: 200,
        body: JSON.stringify(newItem)
    };
}

module.exports = {
    handler: insertItem
}
