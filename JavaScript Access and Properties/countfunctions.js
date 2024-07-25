document.addEventListener('DOMContentLoaded', () => {
    function Counter() {
        this._count = 0;
    }

    Object.defineProperty(Counter.prototype, 'count', {
        get: function() {
            return this._count;
        },
        set: function(value) {
            this._count = value;
            countValue.textContent = this._count;
        }
    });

    Counter.prototype.increment = function() {
        this.count += 1;
    };

    Counter.prototype.reset = function() {
        this.count = 0;
    };

    Counter.prototype.incrementBy = function(value) {
        this.count += value;
    };

    const counter = new Counter();
    const countValue = document.getElementById('countValu');
    const countButton = document.getElementById('countBtnn');
    const resetButton = document.getElementById('resetButton');
    const incrementByButton = document.getElementById('incrementByButton');

    countButton.addEventListener('click', () => {
        counter.increment();
    });

    resetButton.addEventListener('click', () => {
        counter.reset();
    });

    incrementByButton.addEventListener('click', () => {
        counter.incrementBy(5);
    });
});
