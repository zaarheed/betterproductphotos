export default {
    airtableApiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
    airtableBaseId: process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID,
    airtableTableName: process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME,
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
    googleAnalyticsTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    googleApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    imagekitPrivateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    imagekitPublicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    imagekitUrlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
    mixpanelToken: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
    tempFolderPath: getTempFolderPath(),
}

function getTempFolderPath() {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
        return `${process.cwd()}/public/tmp`;
    }

    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "live") {
        return `/tmp`;
    }
}