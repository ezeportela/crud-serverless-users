import { newDynamoClient } from "../../pkg/dynamo";

export async function getUsers(event, context) {
  const userId = event.pathParameters.id;

  var params = {
    ExpressionAttributeValues: { ":userId": userId },
    KeyConditionExpression: "userId = :userId",
    TableName: "usersTable",
  };

  const user = await newDynamoClient().query(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({ user }),
  };
}
