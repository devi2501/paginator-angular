export class User {
    /**
     * Constructor for User class
     * @param contactNo
     * @param requestID
     * @param ownerName
     * @param ownerSSN
     * @param annuitantName
     * @param annuitantSSN
     * @param producerName
     * @param producerSSN
     * @param producerFirm
     * 
     */
    constructor(public contactNo: number,
                public requestID: number,
                public ownerName: string,
                public ownerSSN :number,
                public annuitantName :string,
                public annuitantSSN:number,
                public producerName:string,
                public producerSSN:number,
                public producerFirm: string
                ) {}
}