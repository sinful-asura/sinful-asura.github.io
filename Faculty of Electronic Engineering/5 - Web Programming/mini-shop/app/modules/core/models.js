export class Component {
    config;
    constructor(config = {
        selector: undefined,
        template: undefined,
        style: undefined
    }){
        this.config = config;
    }
}

export class ApplicationWizzard {
    init = new Event('app-init');
    constructor() {}
    
    bootstrap () {
        document.dispatchEvent(this.init);
    }
}