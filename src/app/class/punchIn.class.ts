export class punchIn {
    public id!: number;
	public empId !: string;
	public punchIn !: Date;
	public punchOut !: Date;
    public createdOn ! : Date;
    public udatedOn !: Date;

    constructor() {
       
       
    }
    getempId(): string {
        return this.empId;
    }
    setempId(id: string): void {
        this.empId = id;
}}