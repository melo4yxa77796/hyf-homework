import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Function to read data from documents.json
const getDocuments = () => {
  const filePath = path.join(__dirname, 'documents.json');
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Home page route
app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search route
app.get("/search", (req, res) => {
  const query = req.query.q;
  const documents = getDocuments();

  if (!query) {
    return res.json([]); // Return an empty array if no query provided
  }

  const filteredDocuments = documents.filter(doc =>
    doc.value && doc.value.includes(query)
  );

  const response = filteredDocuments.map(doc => ({
    id: doc.id,
    type: doc.type,
    value: doc.value
  }));

  return res.json(response);
});

// POST /search route
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;
  const documents = getDocuments();

  // Check if both q and fields are provided
  if (query && fields) {
    return res.status(400).json({ message: "Cannot provide both query parameter 'q' and field filters." });
  }

  let filteredDocuments = documents;

  // If fields are provided, filter by the specified fields
  if (fields) {
    filteredDocuments = filteredDocuments.filter(doc => {
      return Object.entries(fields).every(([key, value]) => doc[key]&&doc[key] === value);
    });
  }

  // If q is provided, filter by the query
  if (query) {
    filteredDocuments = filteredDocuments.filter(doc =>
      doc.value && doc.value.includes(query)
    );
  }

  // Return the filtered documents
  return res.json(filteredDocuments);
});

// Route to get a document by ID
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const documents = getDocuments();

  const document = documents.find(doc => doc.id === id);

  if (!document) {
    return res.status(404).json({ message: "Document not found" });
  }

  return res.json(document);
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
