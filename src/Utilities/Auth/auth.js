export const setAuthToken = (user) => {
    const userEmail = {
        email: user.email
    }

    fetch('https://service-review-server-side-pi.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userEmail)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('rdsToken', data.token);
        })
}