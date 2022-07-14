export class LoginClass {
    private emailId: string;
    private password: string;

    constructor(emailId: string, password: string) {
        this.emailId = emailId;
        this.password = password;
    }
    getEmailId(): string {
        return this.emailId;
    }
    getPassword(): string {
        return this.password;
    }
    setEmailId(emailId: string): void {
        this.emailId = emailId;
    }
    setPassword(password: string): void {
        this.password = password;
    }
}