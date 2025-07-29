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

app.listen(port, () => {
  console.log(`Dev Wisdom API running at http://localhost:${port}`);
});
