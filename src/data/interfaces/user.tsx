import UserEntitlements from "../enums/userEntitlements";

interface IUser {
    id: string;
    name: string;
    entitlements: UserEntitlements
}

export default IUser;