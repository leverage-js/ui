export default class Option {
    constructor(option) {
        if (Array.isArray(option)) {
            [this.key, this.value] = option;
            return;
        }

        this.key = option;
        this.value = option;
    }

    isEqual(option) {
        return this.key === option.key;
    }
}

export class NullOption {
    isEqual() {
        return false;
    }

    get value() {
        return '';
    }
}
