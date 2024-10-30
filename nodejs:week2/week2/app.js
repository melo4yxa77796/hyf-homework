import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const getDocuments = () => {
  const filePath = path.join(__dirname, "documents.json");
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const filterDocuments = (documents, query = null, fields = null) => {
  let filteredDocuments = documents;

  if (fields) {
    filteredDocuments = filteredDocuments.filter((doc) => {
      return Object.entries(fields).every(
        ([key, value]) => doc[key] && doc[key] === value
      );
    });
  }

  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    filteredDocuments = filteredDocuments.filter(
      (doc) => doc.value && doc.value.toLowerCase().includes(lowerCaseQuery) // Здесь используется lowerCaseQuery
    );
  }

  return filteredDocuments;
};

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const query = req.query.q;
  const documents = getDocuments();

  if (!query) {
    return res.json([]);
  }

  const filteredDocuments = filterDocuments(documents, query);

  const response = filteredDocuments.map((doc) => ({
    id: doc.id,
    type: doc.type,
    value: doc.value,
  }));

  return res.json(response);
});

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;
  const documents = getDocuments();

  if (query && fields) {
    return res
      .status(400)
      .json({
        message: "Cannot provide both query parameter 'q' and field filters.",
      });
  }

  const filteredDocuments = filterDocuments(documents, query, fields);

  return res.json(filteredDocuments);
});

app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const documents = getDocuments();

  const document = documents.find((doc) => doc.id === id);

  if (!document) {
    return res.status(404).json({ message: "Document not found" });
  }

  return res.json(document);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
