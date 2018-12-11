
class Command {
    constructor(name) {
        this.settings = new Map();
        this.name = name;
    }

    run(code) {
        this.run = () => code;
    }

    get(key) {
        return this.settings.get(key);
    }

    set(key, value) {
        switch (key) {
            case "description" || "desc": {
                this.settings.set('description', value);
            }

            case "alliases": {
                if (!value.length > 0) {return new Error(`Incorrectly set alliases for ${this.name}`);}
            }



            break;
        }
    }
}

module.exports = Command;