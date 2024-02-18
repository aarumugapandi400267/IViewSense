const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const input = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        if (input >= 0 && input < this.options.length && Number.isInteger(input)) {
            this.answers[input]++;
        } else {
            alert('Invalid option! Please choose a number between 0 and ' + (this.options.length - 1));
        }

        this.displayResults();
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 }, 'array');
poll.displayResults.call({ answers: data1 }, 'string');

poll.displayResults.call({ answers: data2 }, 'array');
poll.displayResults.call({ answers: data2 }, 'string');
