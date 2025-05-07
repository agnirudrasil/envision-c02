# Assignment

We will have this schema in elasticsearch.

```json
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1,
    "analysis": {
      "analyzer": {
        "default": {
          "type": "standard"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "id": {
        "type": "keyword"
      },
      "title": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "description": {
        "type": "text"
      },
      "location": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
      },
      "remote": {
        "type": "boolean"
      },
      "created_at": {
        "type": "date"
      },
      "role": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
      },
      "company_name": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
      }
    }
  }
}
```

## Task 1: Create the index
- Create an index called `job_listings` with the above schema.
- Use the `PUT` method to create the index.

## Task 2: Insert data

- Insert 5 job listings into the `job_listings` index. Makeup your own data and be as creative as you want.
- Here is an example on how to insert a data:
  - Run the following command in your terminal:
  ```bash
    curl -X POST "localhost:9200/job_listings/_doc" -H 'Content-Type: application/json' -d'
    {
        "id": "1",
        "title": "Software Engineer",
        "description": "We are looking for a software engineer to join our team.",
        "location": "New York, NY",
        "remote": false,
        "created_at": "2023-10-01T00:00:00Z",
        "role": "Engineer",
        "company_name": "Tech Company"
    }
    '
    ```
- Make sure to change the `id` field to be unique for each job listing.

## Task 3: Build the library to search for job listings

- Create a node.js function that can search for job listings in the `job_listings` index.
- Following is an example input that will be passed to the function:
```json
{
  "query": "a random query",
  "filters": {
    "location": ["india", "usa"],
    "role": ["software engineer", "data scientist"],
    "remote": true
  }
}
```
- The `query` field is a string that will be used to search for strings across all the fields in the index.
- The `filters` field is an object that contains the filters to be applied to the search.
- The function should return the job listings that match the query and filters.
- It should also return facets for the filters, i.e., the unique values for each filter for the given filters.
  - Say, you provide the following filters:
    ```json
    {
    "filters": {
      "location": ["india"],
      "remote": true
    }
    }
    ```
  - The function should return all remote jobs in India, as well as all remote roles in India.

Here is an example implementation of this:

```javascript
const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: 'http://localhost:9200' });

/**
 * Translates the given input into a search query and returns results + aggregations.
 */
async function searchWithFilters(input) {
  const queryText = input.query || '';
  const filters = input.filters || {};
  const from = parseInt(input.from_ ?? 0, 10);

  const mustQuery = queryText
    ? {
        multi_match: {
          query: queryText,
          fields: ['title', 'description', 'location', 'role', 'company_name']
        }
      }
    : { match_all: {} };

  const filterClauses = [];

  if (Array.isArray(filters.location)) {
    filterClauses.push({ terms: { 'location.keyword': filters.location } });
  }

  if (Array.isArray(filters.title)) {
    filterClauses.push({ terms: { 'title.keyword': filters.title } });
  }

  if (typeof filters.remote === 'boolean') {
    filterClauses.push({ term: { remote: filters.remote } });
  }

  const query = {
    index: 'your_index_name', // Replace this
    from,
    size: 5,
    body: {
      query: {
        bool: {
          must: mustQuery,
          filter: filterClauses
        }
      },
      aggs: {
        'category-agg': {
          terms: {
            field: 'role.keyword'
          }
        },
        'year-agg': {
          date_histogram: {
            field: 'created_at',
            calendar_interval: 'year',
            format: 'yyyy'
          }
        }
      }
    }
  };

  const { body: results } = await client.search(query);

  const aggs = {
    Category: Object.fromEntries(
      results.aggregations['category-agg'].buckets.map(b => [b.key, b.doc_count])
    ),
    Year: Object.fromEntries(
      results.aggregations['year-agg'].buckets
        .filter(b => b.doc_count > 0)
        .map(b => [b.key_as_string, b.doc_count])
    )
  };

  return { results: results.hits.hits, aggs };
}
```

Please modify this code so that works with all the fields in the index.
