import { r as registerInstance, h } from './index-010714d3.js';

const appGameCss = "div.grid{margin:20px auto;width:200px;height:200px;display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(3, 1fr)}ion-label.game{border:1px solid var(--ion-color-base);display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(3, 1fr)}ion-label.game span{font-size:1em;grid-row-start:2;grid-row-end:3;grid-column-start:2;grid-column-end:3}div.item-native{border-width:0px;border-style:none;--border-width:0px;--border-style:none;padding:0px;--padding:0px}div.item-native div.item-inner{border-width:0px;border-style:none;--border-width:0px;--border-style:none}";

const AppGame = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mas = [
            "", "", "",
            "", "", "",
            "", "", ""
        ];
        this.message = "";
        this.obgect = ["X", "O"];
        this.move = true;
        this.victory = [0, 0];
        this.save = [];
        this.move_save = [true, false, true, false, true, false, true, false, true];
    }
    nextMove(index) {
        if (this.mas[index] == "") {
            let f = [];
            for (let i of this.mas)
                f.push(i);
            this.save.push(f);
            if (this.move) {
                this.mas[index] = this.obgect[0];
                this.move = false;
            }
            else {
                this.mas[index] = this.obgect[1];
                this.move = true;
            }
        }
    }
    crosSover(move) {
        this.move = this.move_save[move];
        this.mas = this.save[move];
        let save = this.save;
        this.save = [];
        for (let i = 0; i < move; i++)
            this.save[i] = save[i];
    }
    checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let j = 0; j < this.obgect.length; j++) {
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (this.mas[a] === this.obgect[j] && this.mas[a] === this.mas[b] && this.mas[a] === this.mas[c]) {
                    this.move = true;
                    return j;
                }
            }
        }
        this.message = "";
        return null;
    }
    newStart() {
        this.save = [];
        this.victory = [0, 0];
        this.mas = [];
        for (let i = 0; i < 9; i++)
            this.mas.push("");
        this.move = true;
    }
    generationField() {
        let a = [];
        for (let i = 0; i < this.mas.length; i++) {
            a.push(h("ion-label", { color: "dark", class: "game ion-no-margin ion-no-padding", onClick: () => this.nextMove(i) }, h("span", null, this.mas[i])));
        }
        return a;
    }
    generationTransition() {
        let b = [];
        b.push(h("ion-item", { lines: "none", class: "ion-no-border" }, h("ion-button", { size: "small", color: "dark", onClick: () => this.newStart() }, "Start")));
        if (this.save) {
            for (let i = 1; i < this.save.length + 1; i++) {
                b.push(h("ion-item", { lines: "none", class: "ion-no-border" }, h("ion-button", { size: "small", color: "dark", onClick: () => this.crosSover(i - 1) }, i, ". Move")));
            }
        }
        return b;
    }
    sendMessage() {
        let games = this.checkWinner();
        if (games != null) {
            for (let i = 0; i < this.mas.length; i++)
                this.mas[i] = "";
            this.save = [];
            this.victory[games] = this.victory[games] + 1;
            if (games == 0)
                this.message = "X";
            else
                this.message = "O";
        }
    }
    moveGame() {
        if (this.move)
            return "X";
        else
            return "O";
    }
    render() {
        document.title = "Game";
        this.sendMessage();
        return [
            h("ion-tabs", null, h("ion-tab-bar", { slot: "top" }, h("ion-tab-button", { tab: "tab2" }, h("ion-icon", { name: "apps" }), h("ion-label", null, "Game")), h("ion-tab-button", { tab: "tab1" }, h("ion-icon", { name: "arrow-undo-outline" }), h("ion-label", null, "Regulations"))), h("ion-tab", { tab: "tab1" }, h("ion-nav", null, h("ion-content", null, h("ion-grid", { fixed: true }, h("ion-row", null, h("ion-col", { size: "12" }, h("ion-item", { color: "primary" }, h("ion-label", null, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E"), h("ion-text", { color: "" }, h("h1", null, "Nos-crosses is a logic game between two opponents on a square field of 3 by 3 cells or larger (up to an \"endless field\"). One of the players plays with \"crosses\", the other - with \"noughts\". The traditional Chinese game (Gomoku) uses black and white stones.")))), h("ion-col", { size: "12" }, h("ion-item", { color: "primary" }, h("ion-label", null, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E"), h("ion-text", { color: "" }, h("h1", null, "The players take turns putting 3x3 signs on the empty cells of the field (one is always crosses, the other is always zeroes). The first player to line up his 3 pieces vertically, horizontally or diagonally wins. The first move is made by the player placing crosses. Usually, at the end of the game, the winning side crosses out its three signs (zero or cross), making up a continuous row.")))), h("ion-col", { size: "12" }, h("ion-item", { color: "primary" }, h("ion-label", null, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E"), h("ion-text", { color: "" }, h("h1", null, "For each side, there are well-known algorithms that guarantee a draw for any opponent's game, and if his opponent makes a mistake, they can win. Thus, the game is in a no-man's death state. Below are some of these strategies. It is considered that the player always observes two rules that take precedence over all others: Rule 1. If a player can win immediately, he does it. Rule 2. If a player cannot win immediately, but his opponent could immediately win by making a move to a cell, the player himself makes a move to that cell, preventing an immediate loss."))))))))), h("ion-tab", { tab: "tab2" }, h("ion-nav", null, h("ion-content", null, h("ion-grid", { fixed: true }, h("ion-row", null, h("ion-col", { size: "0", "size-lg": "3" }), h("ion-col", { size: "12", "size-lg": "6" }, h("ion-item", { class: " ion-no-border", color: "primary" }, h("ion-label", { slot: "start", class: "ion-no-border" }, "X:", this.victory[0]), h("ion-label", { slot: "start", class: " ion-no-border" }, "O:", this.victory[1]), h("ion-label", { slot: "start", class: " ion-no-border" }, "Winner:", this.message), h("ion-label", { slot: "start", class: " ion-no-border" }, "Move:", this.moveGame()))), h("ion-col", { size: "0", "size-lg": "3" }), h("ion-col", { size: "0", "size-lg": "4" }), h("ion-col", { size: "12", "size-lg": "4" }, h("div", { class: "grid" }, this.generationField())), h("ion-col", { size: "12", "size-lg": "2" }, h("ion-list", null, this.generationTransition()))))))))
        ];
    }
};
AppGame.style = appGameCss;

export { AppGame as app_game };
