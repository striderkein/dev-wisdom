require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const proverbs = [
  {
    id: 1,
    ja: 'よい命名は知識を構築する',
    en: 'Good naming builds knowledge',
  },
  {
    id: 2,
    ja: 'コードを書くたび、何かが壊され、そして生まれる',
    en: 'Each act of coding tears something down to build anew.',
  },
  {
    id: 3,
    ja: 'エラーハンドリングに手を抜けば、いずれ十倍の時間を失うことになる。',
    en: 'Skimping on error handling will cost you tenfold in the end.',
  },
];

app.get('/api/proverbs', (req, res) => {
  res.json(proverbs);
});

app.get('/api/proverbs/random', (req, res) => {
  const random = proverbs[Math.floor(Math.random() * proverbs.length)];
  res.json(random);
});

app.get('/api/proverbs/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const proverb = proverbs.find((p) => p.id === id);

  if (!proverb) {
    return res.status(404).json({ error: 'Proverb not found' });
  }

  res.json(proverb);
});

app.get('/', (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dev Wisdom API</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #0d1117; color: #c9d1d9; padding: 2rem; line-height: 1.6; }
    h1 { border-bottom: 1px solid #30363d; padding-bottom: 0.5rem; }
    code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; background-color: #161b22; padding: 0.2em 0.4em; border-radius: 6px; font-size: 85%; }
    pre { background-color: #161b22; padding: 1rem; border-radius: 6px; overflow-x: auto; }
    pre code { background-color: transparent; padding: 0; font-size: 100%; }
    a { color: #58a6ff; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .method { color: #7ee787; font-weight: bold; }
  </style>
</head>
<body>
  <h1>💡 Dev Wisdom API</h1>
  <p>A simple REST API that delivers random programming wisdom.</p>

  <h2>🚀 Endpoints</h2>
  <pre><code><span class="method">GET</span> /api/proverbs          - Get all proverbs
<span class="method">GET</span> /api/proverbs/:id      - Get proverb by ID
<span class="method">GET</span> /api/proverbs/random   - Get a random proverb</code></pre>

  <h2>🔗 Examples</h2>
  <ul>
    <li><a href="/api/proverbs">/api/proverbs</a></li>
    <li><a href="/api/proverbs/random">/api/proverbs/random</a></li>
  </ul>
</body>
</html>
  `;
  res.send(html);
});

app.listen(port, () => {
  if (process.env.NODE_ENV === 'local') {
    console.log(`Dev Wisdom API running at http://localhost:${port}`);
  }
});
