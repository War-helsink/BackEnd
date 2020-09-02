import { r as registerInstance, h } from './index-010714d3.js';

const appUserCss = "ion-col.grids{display:flex;flex-direction:column;justify-self:center;align-items:center}div.user{width:90%;height:300px}ion-list.display.list-md{background:none}";

const AppUser = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        this.login = document.querySelector('.login');
        this.passwd = document.querySelector('.passwd');
        this.radios = document.querySelector('ion-radio.user');
        this.form = document.querySelector('form.formLogin');
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
    clearInput() {
        this.login.value = '';
        this.passwd.value = '';
        this.radios.attributes[1].value = 'false';
        this.radios.classList.remove('radio-checked');
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
    loginSite() {
        if (this.login.value != '') {
            // Действия с именем 
            if (this.passwd.value != '') {
                // Действия с паролем
                if (this.radios.attributes[2].value === 'true') {
                    //Все готово сверить с сервером
                    let data = new FormData(this.form);
                    let obj = {};
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    // let csrftoken =  document.querySelector('[name=csrfmiddlewaretoken]');
                    let csrftoken = this.getCookie('csrftoken');
                    this.sendMessages('/avtorizet/', json, csrftoken)
                        .then((json) => {
                        alert(json['text']);
                    });
                    this.clearInput();
                }
                else {
                    alert('You bot!');
                }
            }
            else {
                alert('Enter password');
            }
        }
        else {
            alert('Enter your name or login');
        }
    }
    render() {
        document.title = "User";
        return [
            h("ion-grid", { fixed: true }, h("ion-row", null, h("ion-col", { size: "12", "size-lg": "6", class: "grids" }, h("div", { class: "user" }, h("form", { class: "formLogin" }, h("ion-label", null, "Your user name:"), h("div", null, h("input", { class: "login", type: "text", name: "login", placeholder: "User name" })), h("ion-label", null, "Your password:"), h("div", null, h("input", { class: "passwd", type: "password", name: "passwd", placeholder: "Your password" })), h("ion-label", null, "You don't robot?"), h("ion-list", { class: "display" }, h("ion-radio-group", { "allow-empty-selection": true, name: "auto", value: "beef" }, h("ion-radio", { class: "user" }))), h("ion-button", { onClick: () => { this.loginSite(); } }, "Login"), h("ion-button", { href: "/registration" }, "Registration"))))))
        ];
    }
};
AppUser.style = appUserCss;

export { AppUser as app_user };
