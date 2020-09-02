import { r as registerInstance, h } from './index-010714d3.js';

const AppArticles = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.obnow = 0;
        this.boolobnow = true;
    }
    async jsonArticles(url) {
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            return json;
        }
        else {
        }
    }
    onlikeClick(id_articles, like_or_dislike) {
        let url;
        if (like_or_dislike)
            url = `/like/${id_articles}/`;
        else
            url = `/dislike/${id_articles}/`;
        this.jsonArticles(url).then((json) => {
            alert(json['text']);
            if (json['ok']) {
                this.boolobnow = true;
                this.obnow = this.obnow + 1;
            }
        });
    }
    componentWillRender() {
        let url;
        if (this.boolobnow) {
            if (this.id_tema) {
                url = `/articles/${this.id_tema}/`;
                this.boolTest = true;
            }
            else if (this.id_articles) {
                url = `/article/${this.id_articles}/`;
                this.boolTest = false;
            }
            else {
                url = '/articles/';
                this.boolTest = true;
            }
            this.jsonArticles(url).then((json) => {
                this.articles = json;
            });
            this.boolobnow = false;
        }
    }
    generationArticles() {
        if (this.boolTest) {
            let section = [];
            if (this.articles) {
                for (let i = 0; i < this.articles.length; i++) {
                    section.push(h("ion-col", { size: "12", "size-lg": "6" }, h("ion-card", { color: "dark" }, h("ion-card-header", null, h("ion-card-subtitle", null, h("ion-item", { lines: "none", color: "dark", href: `/topic/${this.articles[i].Tema_Id_Articles}` }, this.articles[i].Temp_Articles), h("ion-icon", { name: "people-circle-outline" }), this.articles[i].articles_int, h("span", { onClick: () => { this.onlikeClick(this.articles[i].id, true); } }, h("ion-icon", { name: "heart-outline" }), this.articles[i].articles_like), h("span", { onClick: () => { this.onlikeClick(this.articles[i].id, false); } }, h("ion-icon", { name: "heart-dislike" }), this.articles[i].articles_unlike)), h("ion-item", { lines: "none", color: "dark", href: `/articles/${this.articles[i].id}` }, h("ion-card-title", null, this.articles[i].articeles_title))), h("ion-card-content", null, this.articles[i].articles_text))));
                }
            }
            return section;
        }
        else {
            if (this.articles) {
                return [
                    h("ion-col", { size: "12" }, h("ion-card", { color: "dark" }, h("ion-card-header", null, h("ion-card-subtitle", null, h("ion-item", { lines: "none", color: "dark", href: `/topic/${this.articles.Tema_Id_Articles}` }, this.articles.Temp_Articles), h("ion-icon", { name: "people-circle-outline" }), this.articles.articles_int, h("span", { onClick: () => { this.onlikeClick(this.articles.id, true); } }, h("ion-icon", { name: "heart-outline" }), this.articles.articles_like), h("span", { onClick: () => { this.onlikeClick(this.articles.id, false); } }, h("ion-icon", { name: "heart-dislike" }), this.articles.articles_unlike)), h("ion-item", { lines: "none", color: "dark", href: `/articles/${this.articles.id}` }, h("ion-card-title", null, this.articles.articeles_title))), h("ion-card-content", null, this.articles.articles_text))),
                    h("app-coments", { idComent: this.articles.id }),
                    h("app-coment", null),
                ];
            }
        }
    }
    render() {
        return [
            h("ion-grid", { fixed: true }, h("ion-row", null, this.generationArticles()))
        ];
    }
};

export { AppArticles as app_articles };
