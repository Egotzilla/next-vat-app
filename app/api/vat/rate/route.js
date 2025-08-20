export function GET(request) {
  return Response.json({ rate: 0.07 });
}

/* 
curl localhost:3000/api/vat/rate  
*/