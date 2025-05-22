// Install the client first: npm install @elastic/elasticsearch

const { Client } = require("@elastic/elasticsearch");

const client = new Client({ node: "http://localhost:9200" }); // Change URL if needed

async function createJobsIndex() {
  const indexName = "jobs";

  // Delete the index if it already exists (optional)
  const exists = await client.indices.exists({ index: indexName });
  if (exists.body) {
    await client.indices.delete({ index: indexName });
  }

  // Create the index with mapping
  await client.indices.create({
    index: indexName,
    body: {
      mappings: {
        properties: {
          title: {
            type: "text",
            fields: {
              keyword: { type: "keyword" },
            },
          },
          company: {
            type: "text",
            fields: {
              keyword: { type: "keyword" },
            },
          },
          remote: { type: "keyword" }, // hybrid, remote, onsite
          job_type: { type: "keyword" }, // full-time, part time, internship, contract
          description: { type: "text" },
          posted_at: { type: "date" },
          tags: { type: "keyword" },
          industry: { type: "keyword" },
          experience_level: { type: "keyword" },
          salary: {
            properties: {
              min: { type: "float" },
              max: { type: "float" },
            },
          },
        },
      },
    },
  });

  console.log(`Index "${indexName}" created with mapping.`);
}

createJobsIndex().catch(console.error);
