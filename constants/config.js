export const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

export const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;

export const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;

export const IMAGEKIT_PUBLIC_KEY = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;

export const IMAGEKIT_URL_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

export const TEMP_FOLDER_PATH = getTempFolderPath();

export const SUBSCRIPTION_LINK = process.env.NEXT_PUBLIC_SUBSCRIPTION_LINK;

function getTempFolderPath() {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
        return `${process.cwd()}/public/tmp`;
    }

    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "live") {
        return `/tmp`;
    }
}
