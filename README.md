# 💡 dev-wisdom

🌐 **Live API**: https://dev-wisdom.onrender.com

A simple REST API that delivers random programming wisdom (proverbs).

## 🔗 Base URL

```
https://dev-wisdom.onrender.com
```

## 🚀 API Endpoints

### `GET /api/proverbs`
Returns all proverbs.

**Try it**: https://dev-wisdom.onrender.com/api/proverbs

### `GET /api/proverbs/:id`
Returns a specific proverb by ID.

**Try it**: https://dev-wisdom.onrender.com/api/proverbs/1

### `GET /api/proverbs/random`
Returns a randomly selected proverb.

**Try it**: https://dev-wisdom.onrender.com/api/proverbs/random

Example response:
```json
  {
    "id": 1,
    "ja": "よい命名は知識を構築する",
    "en": "Good naming builds knowledge."
  }
```

## How to Develop

```sh
cp .env.example .env
npm i
npm start
```
