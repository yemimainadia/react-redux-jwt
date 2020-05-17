class SessionApi {
    static login(user) {
        console.log(user);
        const request = new Request('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });


        return fetch(request).then(response => {
            console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default SessionApi;