import { User } from '../models/user';

export class UserApiModel {
    id: number;
    username: string;
    profile: {
        firstName: string;
        lastName: string;
        avatar: string;
        personnalDetails: {
            nationnality: string;
            birthDate: string;
            birthCountry: string;
            birthCity: string;
        };
        contact: {
            firstName: string;
            lastName: string;
            phone: string;
            email: string;
            address: {
                number: string;
                name: string;
                zipcode: string;
                city: string;
            }
        };
    };

    public constructor(init?: Partial<UserApiModel>) {
        Object.assign(this, init);
    }
}

export class UserMapper {

    public static ToApi(user: User) {

        // Profile
        const profile = user.profile;

        // PersonalDetails
        const personalDetails = profile ? profile.personalDetails : null;

        // Contact
        const contact = profile ? profile.contact : null;

        // Address
        const address = contact ? contact.address : null;

        return new UserApiModel({
            id: user.id,
            username: user.username,

            // Profile
            profile: profile ? {
                firstName: profile.firstName,
                lastName: profile.lastName,
                avatar: profile.avatarBase64,

                // PersonalDetails
                personnalDetails: personalDetails ? {
                    nationnality: personalDetails.nationality,
                    birthDate: personalDetails.birthDate.toDateString(),
                    birthCountry: personalDetails.birthCountry,
                    birthCity: personalDetails.birthCity,
                } : null,
                // PersonalDetails

                // Contact
                contact: contact ? {
                    firstName: contact.firstName,
                    lastName: contact.lastName,
                    phone: contact.phone,
                    email: contact.email,

                    // Address
                    address: address ? {
                        number: address.number.toString(),
                        name: address.name,
                        zipcode: address.zipcode,
                        city: address.city,
                    } : null
                    // Address

                } : null,
                // Contact

            } : null
            // Profile
        });
    }

    public static FromApi(userApi: UserApiModel) {

        // Profile
        const profile = userApi.profile;

        // PersonalDetails
        const personalDetails = profile ? profile.personnalDetails : null;

        // Contact
        const contact = profile ? profile.contact : null;

        // Address
        const address = contact ? contact.address : null;

        return new User({
            id: userApi.id,
            username: userApi.username,

            // Profile
            profile: profile ? {
                firstName: profile.firstName,
                lastName: profile.lastName,

                // PersonalDetails
                personalDetails: personalDetails ? {
                    nationality: personalDetails.nationnality,
                    birthDate: new Date(personalDetails.birthDate),
                    birthCountry: personalDetails.birthCountry,
                    birthCity: personalDetails.birthCity
                } : null,
                // PersonalDetails

                // Contact
                contact: contact ? {
                    firstName: contact.firstName,
                    lastName: contact.lastName,

                    // Address
                    address: address ? {
                        number: parseInt(address.number, 10),
                        name: address.name,
                        zipcode: address.zipcode,
                        city: address.city
                    } : null,
                    // Address

                    phone: userApi.profile.contact.phone,
                    email: userApi.profile.contact.email
                } : null,
                // Contact

                avatarBase64: userApi.profile.avatar || null
            } : null
            // Profile
        });
    }
}
