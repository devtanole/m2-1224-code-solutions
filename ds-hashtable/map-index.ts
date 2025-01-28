export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const index = new Map<string, Set<Document>>();
  docs.forEach((doc) => {
    const words = doc.content.toLocaleLowerCase().match(/\b(\w+)\b/g);
    words?.forEach((word) => {
      const ds = index.get(word);
      if (ds) {
        ds.add(doc);
      } else {
        index.set(word, new Set([doc]));
      }
    });
  });
  return index;
}
