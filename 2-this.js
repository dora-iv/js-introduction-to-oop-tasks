// BEGIN
function make(numer = 0, denom = 1) {
    return {
        numer: numer,
        denom: denom,
        setNumer(n) {
            this.numer = n;
        },
        setDenom(d) {
            this.denom = d;
        },
        getNumer() {
            return this.numer;
        },
        getDenom() {
            return this.denom;
        },
        toString() {
            return `${this.numer}/${this.denom}`;
        },
        add(rational) {
            const newNumer = this.numer * rational.getDenom() + this.denom * rational.getNumer();
            const newDenom = this.denom * rational.getDenom();
            return make(newNumer, newDenom);
        }
    };
}

export default make;

// END