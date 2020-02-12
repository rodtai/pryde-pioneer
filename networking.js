export async function sendResponse(user, response) {
    try {
        let res = await fetch('https://pryde-pioneer.herokuapp.com/response', {
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
        let parsedRes = await res.json();
        console.log(parsedRes);
        return parsedRes.data != null;
    }
    catch (error) {
        return false;
    }
}