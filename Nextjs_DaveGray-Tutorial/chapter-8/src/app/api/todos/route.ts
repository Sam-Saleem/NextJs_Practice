import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET() {
  const response = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await response.json();
  return NextResponse.json(todos);
}
// We are sending the API Key in headers of all requests except the get requests, which is not really necessary for the Json placeholder API.
export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: "Todo id is required!" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });

  return NextResponse.json({ message: `Todo ${id} deleted successfully!` });
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title)
    return NextResponse.json({ message: "Missing required data!" });

  const response = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });
  const newTodo: Todo = await response.json();

  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { id, userId, title, completed }: Todo = await request.json();

  if (!id || !userId || !title || ![true, false].includes(completed))
    return NextResponse.json({ message: "Missing required data!" });

  const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      id,
      userId,
      title,
      completed,
    }),
  });

  const updatedTodo: Todo = await response.json();

  return NextResponse.json(updatedTodo);
}

export async function PATCH(request: Request) {
  const { id, title }: Partial<Todo> = await request.json();

  if (!id || !title)
    return NextResponse.json({ message: "Missing required data!" });

  const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      title,
    }),
  });

  const patchedTodo: Todo = await response.json();

  return NextResponse.json(patchedTodo);
}
