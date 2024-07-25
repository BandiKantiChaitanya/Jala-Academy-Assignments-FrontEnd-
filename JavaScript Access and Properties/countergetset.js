document.addEventListener('DOMContentLoaded', () => {
    const counter = {
        _count: 0,

        get count() {
            return this._count;
        },

        set count(value) {
            this._count = value;
            countValue.textContent = this._count;
        }
    };

    const countValue = document.getElementById('countVal');
    const countButton = document.getElementById('countBtn');

    countButton.addEventListener('click', () => {
        counter.count = counter.count + 1;
    });
});
