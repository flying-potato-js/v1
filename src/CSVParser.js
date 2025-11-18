// CSVParser.js: CSV to array of objects
window.parseCSV = csv => {
  let [h,...rows] = csv.trim().split('\n').map(r=>r.split(','));
  return rows.map(r=>Object.fromEntries(h.map((k,i)=>[k.trim(), r[i].trim()])));
};
