export class Serie {

    constructor(private idA:number,private nameA:string,private chanelA:string,private seasonsA:number) {}


    get id(): number {return this.idA;}

    get name(): string {return this.nameA}

    get chanel(): string{return this.chanelA}

    get seasons(): number{return this.seasonsA}


}