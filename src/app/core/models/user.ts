export class User {
    id: number;
    email: string;
    username: string;
    password: string;
    token?: string;
    profile?: {
        firstName?: string;
        lastName?: string;
        personalDetails?: {
            nationality?: string,
            birthDate?: Date,
            birthCountry?: string,
            birthCity?: string
        };
        contact?: {
            firstName?: string,
            lastName?: string,
            address?: {
                number?: number,
                name?: string,
                zipcode?: string,
                city?: string
            },
            phone?: string,
            email?: string
        },
        avatarBase64?: string
    };
    formCompleted?: {
        status?: string;
    };

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
