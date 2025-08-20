export function GET(request) {
    const { searchParams } = new URL(request.url);
    const amount = parseFloat(searchParams.get('amount'));
    const vat = amount * 0.07;
    return Response.json({ rate: 0.07, amount, vat });
}

/* 
curl "localhost:3000/api/vat?amount=1000"  
*/

export async function POST(request) {
    const { amount } = await request.json();
    const rate = 0.07;
    const vat = (amount * rate).toFixed(2);
    return Response.json({ rate, amount, vat });
}

/* 
curl -X POST -d '{"amount":100}' localhost:3000/api/vat 
*/