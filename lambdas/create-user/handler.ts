import { newDynamoClient } from "../../pkg/dynamo";
import { randomUUID } from "crypto";

export async function createUser(event, context) {
  const user = JSON.parse(event.body);
  Object.assign(user, { userId: randomUUID() });

  var params = {
    TableName: "usersTable",
    Item: user,
  };

  await newDynamoClient().put(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify({ user }),
  };
}
