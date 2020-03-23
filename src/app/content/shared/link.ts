export class Link {
    next?: Page;
    prev?: Page;
    last?: Page;

    constructor(args: Link = {}) {
        this.next = new Page(args.next);
        this.prev = new Page(args.prev);
        this.last = new Page(args.last);
    }
}

export class Page {
    _limit?: number;
    _page?: number;
    rel?: string;
    url?: string;

    constructor(args: Page = {}) {
        this._page = args._page;
        this._limit = args._limit;
        this.rel = args.rel;
        this.url = args.url;
    }
}