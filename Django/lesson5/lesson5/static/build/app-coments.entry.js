import { r as registerInstance, h } from './index-010714d3.js';

const AppComents = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async sendMessages(url) {
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            return json;
        }
        else {
        }
    }
    connectedCallback() {
        if (!this.comment)
            if (this.idComent)
                this.sendMessages(`/coments/${this.idComent}/`).then((json) => {
                    this.comment = json;
                });
    }
    generateComens() {
        let coments = [];
        if (this.comment) {
            if (this.comment.length >= 1) {
                for (let i = 0; i < this.comment.length; i++) {
                    coments.push(h("ion-col", { size: "12" }, h("ion-card", { color: "dark" }, h("ion-card-header", null, h("ion-card-subtitle", null, h("ion-icon", { name: "heart-outline" }), this.comment[i].articles_like, h("ion-icon", { name: "heart-dislike" }), this.comment[i].articles_unlike), h("ion-card-title", null, this.comment[i].User_acaunt)), h("ion-card-content", null, this.comment[i].comment_text))));
                }
            }
            else {
                coments.push(h("ion-col", { size: "12" }, h("ion-card", { color: "dark" }, h("ion-card-header", null, h("ion-card-title", null, "No comments yet")), h("ion-card-content", null, "No comments yet"))));
            }
        }
        return coments;
    }
    render() {
        return [
            h("ion-col", { size: "12" }, h("ion-grid", { fixed: true }, h("ion-row", null, this.generateComens())))
        ];
    }
};

export { AppComents as app_coments };
