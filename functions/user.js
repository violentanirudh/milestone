import { Client, Databases } from "node-appwrite";

export default async ({ req, res, log, error }) => {
    try {
        // Init Appwrite Client
        const client = new Client()
            .setEndpoint(process.env.APPWRITE_ENDPOINT)
            .setProject(process.env.APPWRITE_PROJECT_ID)
            .setKey(process.env.APPWRITE_API_KEY);

        const databases = new Databases(client);

        // Parse user data from Appwrite trigger
        const { $id: userId, name, email } = JSON.parse(req.payload);

        // Create profile document
        await databases.createDocument(
            process.env.APPWRITE_DATABASE_ID,
            process.env.APPWRITE_PROFILES_COLLECTION_ID,
            userId,
            {
                name: name || "Anonymous",
                email,
                interests: [],
                upvoted: [],
                bookmarked: []
            }
        );

        log(`Profile created for user: ${userId}`);
        return res.json({ success: true, message: "Profile created" });

    } catch (err) {
        error(err.message);
        return res.json({ success: false, error: err.message });
    }
};
