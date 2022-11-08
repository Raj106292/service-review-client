export const setAuthToken = (user) => {
    const userEmail = {
        email: user.email
    }

    fetch('https://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userEmail)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('geniusToken', data.token);
        })
}