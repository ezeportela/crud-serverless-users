export async function getUsers(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "hello world" }),
  };
}