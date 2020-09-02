import { r as registerInstance, h } from './index-010714d3.js';

const AppRegistration = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        this.form = document.querySelector('form.formRegist');
        this.name = this.form.querySelector('.name');
        this.login = this.form.querySelector('.logins');
        this.email = this.form.querySelector('.email');
        this.passwdFirst = this.form.querySelector('.passwd-first');
        this.passwdSecond = this.form.querySelector('.passwd-second');
        this.radios = document.querySelector('ion-radio.regisration');
        this.number = this.form.querySelector('.number');
    }
    clearInput() {
        this.name.value = '';
        this.login.value = '';
        this.email.value = '';
        this.number.value = '';
        this.passwdFirst.value = '';
        this.passwdSecond.value = '';
        this.radios.attributes[1].value = 'false';
        this.radios.classList.remove('radio-checked');
    }
    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    async sendMessages(url, postData, csrftoken) {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: postData
        });
        if (response.ok) {
            let json = await response.json();
            return json;
        }
        else {
        }
    }
    onRegistration() {
        //Registration logic 
        if (this.name.value !== '') {
            if (this.login.value !== '') {
                if (this.email.value !== '') {
                    if (this.passwdFirst.value !== '' && this.passwdSecond.value !== '' && this.passwdFirst.value === this.passwdSecond.value) {
                        if (this.number.value !== '') {
                            if (this.radios.attributes[2].value === 'true') {
                                let data = new FormData(this.form);
                                let obj = {};
                                data.forEach(function (value, key) {
                                    obj[key] = value;
                                });
                                let json = JSON.stringify(obj);
                                let csrftoken = this.getCookie('csrftoken');
                                this.sendMessages('/registret/', json, csrftoken).then(function (json) {
                                    alert(json['text']);
                                });
                            }
                            else {
                                alert('You bot!');
                            }
                        }
                        else {
                            alert('You haven\'t seen the phone number!');
                        }
                    }
                    else {
                        alert('Repeat password correctly');
                    }
                }
                else {
                    alert('Enter your email');
                }
            }
            else {
                alert('Enter your login');
            }
        }
        else {
            alert('Enter your name');
        }
    }
    render() {
        document.title = "Registration";
        return [
            h("ion-grid", { fixed: true }, h("ion-row", null, h("ion-col", { size: "12", "size-lg": "6", class: "grids" }, h("div", { class: "user" }, h("form", { class: "formRegist" }, h("ion-label", null, "Your user name:"), h("div", null, h("input", { class: "name", type: "text", name: "name", placeholder: "User name" })), h("ion-label", null, "Your login:"), h("div", null, h("input", { class: "logins", type: "text", name: "login", placeholder: "User login" })), h("ion-label", null, "Your email:"), h("div", null, h("input", { class: "email", type: "text", name: "email", placeholder: "User email" })), h("ion-label", null, "Enter your phone number:"), h("div", null, h("input", { class: "number", type: "text", name: "number", placeholder: "Enter your phone number" })), h("ion-label", null, "Your password:"), h("div", null, h("input", { class: "passwd-first", type: "password", name: "passwd-first", placeholder: "Your password" })), h("ion-label", null, "Your password to repeat:"), h("div", null, h("input", { class: "passwd-second", type: "password", name: "passwd-second", placeholder: "Your password to repeat" })), h("ion-label", null, "You don't robot?"), h("br", null), h("ion-list", { class: "display" }, h("ion-radio-group", { "allow-empty-selection": true, name: "auto", value: "beef" }, h("ion-radio", { class: "regisration" }), h("br", null))), h("ion-button", { onClick: () => { this.onRegistration(); } }, "Registration"), h("ion-button", { href: "/user/" }, "Login"))))))
        ];
    }
};

export { AppRegistration as app_registration };
