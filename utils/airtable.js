import config from "@/constants/config";

const { airtableApiKey, airtableBaseId, airtableTableName } = config;

const Airtable = require("airtable");

Airtable.configure({
    apiKey: airtableApiKey
});

const base = Airtable.base(airtableBaseId);

const table = base(airtableTableName);

function getTable({ name }) {

    if (!name) return base(airtableTableName);

    return base(name);
}

export { table, getTable };