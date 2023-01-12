import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from "@/constants/config";

const Airtable = require("airtable");

Airtable.configure({
    apiKey: AIRTABLE_API_KEY
});

const base = Airtable.base(AIRTABLE_BASE_ID);

function getTable({ name }) {

    if (!name) throw new Error("No table name provided");

    return base(name);
}

export { getTable };