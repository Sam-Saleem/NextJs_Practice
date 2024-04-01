import { NextResponse } from "next/server";

// Dynamic route as using request: Using the Request object with the GET method.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  //   const name = searchParams.get("name");
  //   const instrument = searchParams.get("instrument");
  //   return NextResponse.json({ name, instrument });

  // Gets any params that are send:
  const obj = Object.fromEntries(searchParams.entries());
  //   console.log(searchParams.entries()); -----> URLSearchParams Iterator { [ 'name', 'Sehar' ], [ 'instrument', 'Guitar' ] }
  //   console.log(obj); ------> { name: 'Sehar', instrument: 'Guitar' }

  return NextResponse.json(obj);
}
