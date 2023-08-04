let url = "https://proud-pike-flannel-nightgown.cyclic.app";

const onSignUp = () => {
    const payload = {
        name: document.querySelector("#signup-name").value,
        email: document.querySelector("#signup-email").value,
        pass: document.querySelector("#signup-pass").value
    }

    if (payload.name === "" || payload.email === "" || payload.pass === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the details....',
        });
        return;
    }

    fetch(`${url}/users/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload),
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        Swal.fire(
            'Signup successful 🎉🎉',
            'You clicked the button!',
            'success'
        );
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    })
    .catch((err) => console.log(err));
}
