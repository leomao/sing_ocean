'use strict';
import questions from './questions';

function random_shuffle(arr) {
    let n = arr.length;

    for (let i=n-1; i>=1; i--) {
        let rd = Math.floor(Math.random() * (i+1));
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
            wrong: $('#wrong-text'),
        };
        this.modal = {
            main: $('#modal'),
            text: $('#modal-text'),
            button: $('#modal-button'),
        };

        this.question_n = questions.length;
        this.permutation = [];
        this.currentQID = null;
        this.wrong_questions = [];
        this.current_cursor = 0;
        this.correct_n = 0;
        this.state = 0;
        for (let i=0; i<this.question_n; i++) {
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
        this.question = questions[this.currentQID];
        this.generate_question_html();
        this.progress_bar.progress('increment');
        this.change_status();

        window.MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    generate_question_html() {
        console.log(123);
        var spans = [];
        const regex = /%\{([^:]*):([^:]*)%\}/g;
        var match, idxNow = 0;
        const str = this.question.question;
        const len = str.length;
        const pushStr = (s) => {
            spans.push($('<span>', {text: s}));
        };
        this.subproblem_n = this.subproblem_solved_n = 0;
        while ((match = regex.exec(str)) != null) {
            pushStr(str.substring(idxNow, match.index));
            spans.push($('<span>', {
                text: `(${match[1]}？)`,
                'class': 'subproblem',
                click: ((c, he) => function(e) { 
                    const me = $(this);
                    me.text(c);
                    me.addClass('solved');
                    he.subproblem_solved();
                    me.off('click');
                    e.preventDefault();
                })(match[2], this),
            }));
            idxNow = match.index + match[0].length;
            this.subproblem_n ++;
        }

        pushStr(str.substring(idxNow));

        this.question_html.empty();
        this.question_html.append(spans);
        if (this.subproblem_n == 0)
          this.problem_end();
    }

    subproblem_solved() {
        window.MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        this.subproblem_solved_n ++;
        if (this.subproblem_solved_n == this.subproblem_n)
            this.problem_end();
    }

    show_modal (wn, qn) {
        if (wn == 0) {
            this.modal.text.text('You have correctly answered all the question!');
            this.modal.button.addClass('disabled');
        } else {
            this.modal.text.text(`You have answered all the question and scored ${qn-wn} / ${qn}.
Continue to review the ${wn} incorrect question`);
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
        this.text.progress.text(`${this.current_cursor} / ${this.question_n}`);
        this.text.correct.text(`${this.correct_n}`);
        this.text.wrong.text(`${this.current_cursor - this.correct_n - 1}`);
    }

    feedback(flag) {
        this.state = 0;
        if (!flag) this.wrong_questions.push(this.currentQID);
        else this.correct_n += 1;
        this.refresh_question();
    }

    shuffle() {
        this.current_cursor = 0;
        random_shuffle(this.permutation);
    }

    init() {
        this.progress_bar.progress({value: 0, total: this.question_n});
        this.shuffle();
        this.refresh_question();
        $('#correct-button').click( () => this.feedback(true) );
        $('#wrong-button').click( () => this.feedback(false) );
    }
}

const machine = new Machine();
machine.init();
