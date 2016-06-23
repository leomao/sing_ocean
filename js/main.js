(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _questions = require('./questions');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function random_shuffle(arr) {
    let n = arr.length;

    for (let i = n - 1; i >= 1; i--) {
        let rd = Math.floor(Math.random() * (i + 1));
        let temp = arr[rd];
        arr[rd] = arr[i];
        arr[i] = temp;
    }
}

class Machine {
    constructor() {
        this.question_html = $('#question-para');
        this.feedback_html = $('#feedback-grid');
        this.progress_bar = $('#progress-bar');
        this.text = {
            progress: $('#progress-text'),
            correct: $('#correct-text'),
            wrong: $('#wrong-text')
        };
        this.modal = {
            main: $('#modal'),
            text: $('#modal-text'),
            button: $('#modal-button')
        };

        this.question_n = _questions2.default.length;
        this.permutation = [];
        this.currentQID = null;
        this.wrong_questions = [];
        this.current_cursor = 0;
        this.correct_n = 0;
        this.state = 0;
        for (let i = 0; i < this.question_n; i++) {
            this.permutation.push(i);
        }
        this.subproblem_n = 0;
        this.subproblem_solved_n = 0;

        this.change_status();
    }

    refresh_question() {
        this.state = 0;
        this.feedback_html.hide();

        if (this.current_cursor >= this.question_n) {
            if (this.wrong_questions.length == 0) {
                this.question_html.text('End');
                this.show_modal(0, this.question_n);
                return 0;
            } else {
                let [w, n] = [this.wrong_questions.length, this.question_n];
                this.review_wrong_question();
                this.show_modal(w, n);
            }
        }

        this.currentQID = this.permutation[this.current_cursor];
        this.current_cursor += 1;
        this.question = _questions2.default[this.currentQID];
        this.generate_question_html();
        this.progress_bar.progress('increment');
        this.change_status();

        window.MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }

    generate_question_html() {
        console.log(123);
        var spans = [];
        const regex = /%\{([^:]*):([^:]*)%\}/g;
        var match,
            idxNow = 0;
        const str = this.question.question;
        const len = str.length;
        const pushStr = s => {
            spans.push($('<span>', { text: s }));
        };
        this.subproblem_n = this.subproblem_solved_n = 0;
        while ((match = regex.exec(str)) != null) {
            pushStr(str.substring(idxNow, match.index));
            spans.push($('<span>', {
                text: `(${ match[1] }？)`,
                'class': 'subproblem',
                click: ((c, he) => function (e) {
                    const me = $(this);
                    me.text(c);
                    me.addClass('solved');
                    he.subproblem_solved();
                    me.off('click');
                    e.preventDefault();
                })(match[2], this)
            }));
            idxNow = match.index + match[0].length;
            this.subproblem_n++;
        }

        pushStr(str.substring(idxNow));

        this.question_html.empty();
        this.question_html.append(spans);
        if (this.subproblem_n == 0) this.problem_end();
    }

    subproblem_solved() {
        window.MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        this.subproblem_solved_n++;
        if (this.subproblem_solved_n == this.subproblem_n) this.problem_end();
    }

    show_modal(wn, qn) {
        if (wn == 0) {
            this.modal.text.text('You have correctly answered all the question!');
            this.modal.button.addClass('disabled');
        } else {
            this.modal.text.text(`You have answered all the question and scored ${ qn - wn } / ${ qn }.
Continue to review the ${ wn } incorrect question`);
        }
        this.modal.main.modal('show');
    }

    review_wrong_question() {
        this.permutation = this.wrong_questions;
        this.wrong_questions = [];
        random_shuffle(this.permutation);
        this.question_n = this.permutation.length;
        this.current_cursor = 0;
        this.correct_n = 0;
    }

    problem_end() {
        this.state = 1;
        this.feedback_html.show();
    }

    change_status(correct) {
        this.text.progress.text(`${ this.current_cursor } / ${ this.question_n }`);
        this.text.correct.text(`${ this.correct_n }`);
        this.text.wrong.text(`${ this.current_cursor - this.correct_n - 1 }`);
    }

    feedback(flag) {
        this.state = 0;
        if (!flag) this.wrong_questions.push(this.currentQID);else this.correct_n += 1;
        this.refresh_question();
    }

    shuffle() {
        this.current_cursor = 0;
        random_shuffle(this.permutation);
    }

    init() {
        this.progress_bar.progress({ value: 0, total: this.question_n });
        this.shuffle();
        this.refresh_question();
        $('#correct-button').click(() => this.feedback(true));
        $('#wrong-button').click(() => this.feedback(false));
    }
}

const machine = new Machine();
machine.init();

},{"./questions":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
let questions = [{
  "level": 3,
  "question": "光合作用是一種%{:氧化還原作用%}"
}, {
  "level": 3,
  "question": "大氣中氧的穩定可藉由海水中有機質的沈降掩埋於海底來調控是一種%{:負回饋作用%}"
}, {
  "level": 3,
  "question": "大氣中$\\ce{CO2}$持續增加,透過海氣作用表層海水會變得比較%{:酸%}"
}, {
  "level": 3,
  "question": "海水中最多摩爾數的元素是%{:氫%}"
}, {
  "level": 3,
  "question": "海水中鈾濃度為3ppb,海水體積約為$\\SI{109}{\\kilo\\meter^3}$,所以海水中鈾有%{多少:$3\\cdot 1015$%}克"
}, {
  "level": 3,
  "question": "海水中滯留(居留)時間最短的元素是%{:釷%}"
}, {
  "level": 3,
  "question": "海水中二氧化碳最穩定的型態為%{:$\\ce{HCO3-}$%}"
}, {
  "level": 3,
  "question": "海洋水體中有機質的$\\ce{C}/\\ce{N}$比值%{:隨深度增加而增加%}"
}, {
  "level": 3,
  "question": "鋁離子在大洋中的垂直分佈型態為%{:中層極小值%}"
}, {
  "level": 3,
  "question": "大洋底層水溶氧值最低的是%{:太平洋%}"
}, {
  "level": 3,
  "question": "大氣中 $\\ce{CO2}$ 含量在%{何季節:冬季%}最高"
}, {
  "level": 3,
  "question": "PgC/yr BMT/yr = %{:10^12 gc/yr%}"
}, {
  "level": 3,
  "question": "海水的體積和重量分別是%{:$\\SI{109}{\\km^3}/\\SI{1021}{\\kg}$%}"
}, {
  "level": 3,
  "question": "海洋中最多的離子為%{:$\\ce{Cl-}$%}"
}, {
  "level": 3,
  "question": "要知道古海水的水溫可以利用%{哪一個:$\\ce{O}$%}的同位素"
}, {
  "level": 3,
  "question": "光合作用的波長範圍大概是%{:$400 \\sim 700\\si{\\nm}$%}"
}, {
  "level": 3,
  "question": "$\\ce{Mg}/\\ce{Ca}$的比例，海水比淡水來得%{:高%}"
}, {
  "level": 3,
  "question": "藻華的顏色是%{:紅色%}"
}, {
  "level": 3,
  "question": "$\\ce{Cl-}, \\ce{Na+}, \\ce{Mg^2+}, \\ce{SO4^2-}, \\ce{Ca^2+}, \\ce{K+}$ 這些在海中是比例守恆!!"
}, {
  "level": 3,
  "question": "$\\ce{NO3-}$ 在海水的分布為%{:表層沒有，欲往底層愈多%}"
}, {
  "level": 3,
  "question": "$\\ce{Al}$ 在海水的分布%{:中層極小，表層跟底層極大%}"
}, {
  "level": 3,
  "question": "$\\ce{Pb}$ 在海水的分布%{:表層極大，愈往底層漸減%}"
}, {
  "level": 3,
  "question": "溶氧在海水的分布%{:中層極小，表層極大，愈往底層漸增(跟$\\ce{Al}$類似)%}"
}, {
  "level": 3,
  "question": "溫度或鹽度 上升 將使溶氧%{:下降%}，反之亦然"
}, {
  "level": 3,
  "question": "$\\ce{C : N : P} = 106: 16 : 1$"
}, {
  "level": 3,
  "question": "化學平衡: $\\ce{106 CO2 + 122 H2O + 16 HNO3 + H3PO4 -> 106 CH2O + 16 H3PO4(NH3) +138 O2}$"
}, {
  "level": 3,
  "question": "溫室氣體%{列四種:CO2、CH4、N2O、CFCS(氟氯碳化物)%}"
}, {
  "level": 3,
  "question": "選項是給一些吸收二氧化碳的方程式 老師說這些全對，題目要選錯者  故要選 \"以上全錯\""
}, {
  "level": 3,
  "question": "大西洋海水下沉流，太平洋湧升流。所以大西洋深層水%{:氧多、營養少%}，太平洋%{:氧少、營養多%}"
}, {
  "level": 3,
  "question": "假如在海水中加入化學元素，常常見到的如鐵、鋁....就愈會污染影響"
}, {
  "level": 3,
  "question": "海水的顏色是%{:無色透明(選項將有藍色 綠色 都是錯的)%}的"
}, {
  "level": 3,
  "question": "哪種環境影響魚類分布最大%{:食物%}"
}, {
  "level": 3,
  "question": "哪種環境影響初級生產量(藻類)最大%{:光線.溫度.營養鹽%}"
}, {
  "level": 3,
  "question": "補償深度是指%{:光合作用=呼吸作用%}"
}, {
  "level": 3,
  "question": "浮游生物的浮游機制? → 選以上皆是"
}, {
  "level": 3,
  "question": "大型生物可藉%{何者:魚標.肺部.鰭三者皆可%}避免沉降"
}, {
  "level": 3,
  "question": "鮭魚生活史何者正確? → 產卵時溯河而上.迴游(一生都在海洋中為非)"
}, {
  "level": 3,
  "question": "鮪魚.馬林魚分布在%{:熱帶.亞熱帶%}"
}, {
  "level": 3,
  "question": "深海魚類特徵? → 選以上皆是"
}, {
  "level": 3,
  "question": "深海動物發光可用來%{:捕食+防禦%}"
}, {
  "level": 3,
  "question": "深海巨大症何者為非? → 生長快速"
}, {
  "level": 3,
  "question": "何者為非? → 細菌分解大有機物是初級生產量"
}, {
  "level": 3,
  "question": "海洋裡何者為非? → 次級產量大於初級產量"
}, {
  "level": 3,
  "question": "湧升流食物鏈較大洋食物鏈%{:短%}"
}, {
  "level": 3,
  "question": "上升流特徵? → 選以上皆是"
}, {
  "level": 3,
  "question": "造成漁業資源枯竭%{:環境改變.工具改變.彀魚(選以上皆是)%}"
}, {
  "level": 3,
  "question": "彀(ㄍㄡˋ)魚是指%{:捕獲太多小魚%}"
}, {
  "level": 3,
  "question": "麻痺性病毒%{:影響鈉的CHANNEL%}"
}, {
  "level": 3,
  "question": "熱帶魚毒中毒症狀為%{:下痢%}"
}, {
  "level": 3,
  "question": "紅潮發生對海洋生物最大衝擊是%{:溶氧量減少%}"
}, {
  "level": 3,
  "question": "紅潮發生源於%{:浮游動植物%}"
}, {
  "level": 3,
  "question": "多醣菜(洋菜)用途%{:食品加工.培養細菌.工業用途.清腸道(選以上皆是)%}"
}, {
  "level": 3,
  "question": "國內淺海養殖大型海藻%{:紫菜.龍鬚菜(無石花菜)%}"
}, {
  "level": 3,
  "question": "膠原蛋白可從哪種海洋生物獲得%{:魚類(植物.貝殼不行)%}"
}, {
  "level": 3,
  "question": "福島核電場外洩的放射物質可能有%{:(B)%} (A) 氧-18 (B) 碘-131 (C) 鉛-210 (D) 碳-14"
}, {
  "level": 3,
  "question": "哪一種放射性同位素可能是福島核電場的外洩產物%{:(B)%} (A) 氧-18 (B) 銫-137 (C) 鉛-210 (D) 碳-14"
}, {
  "level": 3,
  "question": "表層海水的溶氧量大約是%{多少:$\\SI{5}{ppm}$%}"
}, {
  "level": 3,
  "question": "海水中最有經濟規模的提煉產物是%{:(D)%} (A) 金 (B) 銀 (C) 鈾 (D) 飲用水"
}, {
  "level": 3,
  "question": "海水的 pH 大約是%{:8%}"
}, {
  "level": 3,
  "question": "地球大氣的 CO2 已經增加到%{多少:400%}ppm"
}, {
  "level": 3,
  "question": "海水的電導係數 ($\\si{\\micro S \\per \\cm}$) 大約是%{多少:53000%}"
}, {
  "level": 3,
  "question": "海水的鹽度 S 大約是%{多少:$35$%}"
}, {
  "level": 3,
  "question": "海水酸化的原因是%{:二氧化碳增加%}"
}, {
  "level": 3,
  "question": "大 S 是表示海水鹽度的符號，請問 S=35 代表%{:每公斤海水中有 35 公克的鹽%}"
}, {
  "level": 3,
  "question": "台灣北部陰陽海景觀的成因是%{:亞鐵與三價鐵的變化%}"
}, {
  "level": 3,
  "question": "龜山島海底熱泉的特色是%{:(A)%} (A) 含大量硫磺(B) 含大量氧氣(C) 含大量銅離子(D) 含大量葉綠素"
}, {
  "level": 3,
  "question": "市面海水飲品有哪些種類%{:(A) 海水直接稀釋(B) 海水(經RO)淡化(C) 海水(經RO)淡化再加鹽(D) 電解製鹽的副產品(E) 普通水加一滴鹽滷%}"
}, {
  "level": 3,
  "question": "海水為什麼會酸化%{:大氣二氧化碳增加改變了海洋中的碳平衡、人類排放工業酸水，污染海洋%}"
}];

exports.default = questions;

},{}]},{},[1]);
