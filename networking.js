export async function sendResponse(user, response) {
    try {
        let res = await fetch('http://0.0.0.0:5000/response', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...user,
                ...response
            })
        });
        console.log(user)
        let parsedRes = await res.json();
        console.log(parsedRes);
        return parsedRes.data != null;
    }
    catch (error) {
        return false;
    }
}