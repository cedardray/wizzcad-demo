export class Data {
    id?: string;
    name?: string;
    forms?: Form[];

    constructor(args: Data = {}) {
        this.id = args.id;
        this.name = args.name;
        this.forms = args.forms.map( form => new Form(form));
    }
}

export class Form {
    name?: string;
    ext?: string;
    model?: Model;
    values?: Value[];

    constructor(args: Form = {}) {
        this.name = args.name;
        this.ext = args.ext;
        this.model = new Model(args.model);
        this.values = args.values.map(value => new Value(value));
    }
}

export class Model {
    name?: string;
    type?: Type;

    constructor(args: Model = {}) {
        this.name = args.name;
        this.type = new Type(args.type);
    }
}

export class Type {
    name?: string;

    constructor(args: Type = {}) {
        this.name = args.name;
    }
}

export class Value {
    displayValue?: string;
    field?: Field;

    constructor(args: Value = {}) {
        this.displayValue = args.displayValue;
        this.field = new Field(args.field);
    }
}

export class Field {
    name?: string;

    constructor(args: Field = {}) {
        this.name = args.name;
    }
}