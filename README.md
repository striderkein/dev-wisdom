# 💡 dev-wisdom

A simple REST API that delivers random programming wisdom (proverbs).

## 🚀 API Endpoints

### `GET /api/proverbs`
Returns all proverbs.

### `GET /api/proverbs/:id`
Returns a specific proverb by ID.

### `GET /api/proverbs/random`
Returns a randomly selected proverb.

Example response:
```json
  {
    id: 1,
    ja: 'よい命名は知識を構築する',
    en: 'Good naming builds knowledge.',
  }
```
