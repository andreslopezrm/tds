export type ClerkVerification = {
    strategy: string;
}

export type ClerkEmailAddress = {
    verification: ClerkVerification;
}

export type ClerkUser = {
    id: string;
    first_name: string;
    last_name: string;
    email_addresses: ClerkEmailAddress[]
}

export async function getClerkUser(userId: string): Promise<ClerkUser> {
    const response = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
        headers: new Headers({
            "Authorization": `Bearer ${process.env.CLERK_API_KEY}`
        })
    });
    const user = await  response.json() as ClerkUser;
    return user;
}

export async function getProviderClerkUser(userId: string): Promise<string | null> {
    try {
        const user = await getClerkUser(userId);
        const provider = user.email_addresses[0]?.verification?.strategy ?? "email_code";
        return provider;
    } catch(err) {
        return null;
    }
}