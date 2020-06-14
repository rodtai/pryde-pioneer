// pryde url: pryde-pioneer.herokuapp.com
export async function sendResponse(user, response) {
    try {
        let res = await fetch('http://pioneer-pryde.herokuapp.com/response', {
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
        return parsedRes.data != null;
    }
    catch (error) {
        return false;
    }
}