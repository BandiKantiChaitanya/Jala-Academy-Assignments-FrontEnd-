function Counter2() {
    this._count = 0;
}

Object.defineProperty(Counter2.prototype, 'count', {
    get: function() {
        return this._count;
    },
    set: function(value) {
        this._count = value;
        countValue.textContent = this._count;
    }
});

Counter2.prototype.increment = function() {
    this.count += 1;
};

Counter2.prototype.reset = function() {
    this.count = 0;
};

Counter2.prototype.incrementBy = function(value) {
    this.count += value;
};

const counter2 = new Counter2();
const countValue = document.getElementById('countValue');
const countBtn = document.getElementById('countBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');

countBtn.addEventListener('click', () => {
    counter2.increment();
});

resetBtn.addEventListener('click', () => {
    counter2.reset();
});

incrementBtn.addEventListener('click', () => {
    counter2.incrementBy(5);
});