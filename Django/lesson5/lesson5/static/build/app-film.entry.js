import { r as registerInstance, h } from './index-010714d3.js';

const AppFilm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    searchFilm(event) {
        if (this.inputFilm.value) {
            console.log(event.target);
            // console.log(JSON.stringify({ 'name': this.inputFilm.value }));
            // let promise = fetch('registret/', {
            // });
            // let request = new XMLHttpRequest();
            // let json = JSON.stringify({'name': this.inputFilm.value});
            // request.open("POST", "registret/");
            // request.setRequestHeader(
            //     "Content-type", "application/json; charset=utf-8"
            // );
            // request.send(json);
        }
    }
    componentDidRender() {
        if (this.inputFilm == undefined)
            this.inputFilm = document.querySelector('ion-input.film');
    }
    render() {
        return (h("ion-grid", { fixed: true }, h("ion-row", null, h("ion-col", { size: "12" }, h("form", { class: "Search", method: "GET" }, h("ion-label", null, "Seacrch film"), h("ion-input", { class: "film", type: "text", placeholder: "Film name" }), h("ion-button", { onClick: (event) => this.searchFilm(event) }, "Search"))))));
    }
};

export { AppFilm as app_film };
