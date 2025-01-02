# KDiffImage - AI Image Generation Bot & Gallery

A Telegram bot that generates images using Stable Diffusion with a web gallery to view and manage generated images.

> **Note:** Ignore the `backend_deprecated` folder - it's an obsolete implementation.

## 🚀 Features

- Generate AI images via Telegram bot
- View all generated images in web gallery
- Private/Public image toggle
- User profiles
- Share images via URL
- Responsive image grid
- Telegram login integration

## 📁 Project Structure

```
kdiffimage/
├── bot/               # Telegram bot
│   ├── src/
│   │   ├── commands/   # Bot commands
│   │   ├── utils/      # Helper functions
│   │   └── bot.ts      # Main bot file
├── client/            # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── hooks/      # Custom hooks
│   │   ├── context/    # Auth context
│   │   └── App.tsx     # Main app
└── README.md
```

## 🛠 Tech Stack

### Bot

- Telegraf (Telegram Bot Framework)
- TypeScript
- Hugging Face Inference API
- Supabase (Database)
- Prisma (ORM)

### Frontend

- React + TypeScript
- Vite
- TailwindCSS
- ShadcnUI
- React Query
- React Router
- Telegram Login Widget

## 🔧 Setup & Installation

1. Clone repository:

```bash
git clone https://github.com/yourusername/kdiffimage.git
```

2. Install bot dependencies:

```bash
cd bot
npm install
```

3. Install client dependencies:

```bash
cd client
npm install
```

4. Set up environment variables:

Bot (.env):

```properties
BOT_TOKEN=your_telegram_bot_token
HF_TOKEN=your_huggingface_token
DATABASE_URL=your_supabase_url
```

Client (.env):

```properties
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_TELEGRAM_BOT_USERNAME=your_bot_username
```

## 🚀 Development

Start bot:

```bash
cd bot
npm run dev
```

Start frontend:

```bash
cd client
npm run dev
```

## 📝 Bot Commands

- `/start` - Welcome message
- `/generateimage` - Generate single image
- `/multiimage` - Generate 3 images
- `/recommended` - Get prompt suggestions
- `/random` - Generate random image
- `/anime` - Generate anime-themed image
- `/showprofile` - View user profile

## 🌐 Frontend Routes

- `/` - Home page with image gallery
- `/user/:username` - User profile page
- `/?image=:id` - Image detail view

## 🔐 Authentication

Uses Telegram Login Widget for authentication. User data is stored in localStorage and used for:

- Viewing private images
- Managing image visibility
- Accessing user-specific features

## 📦 Deployment

### Bot

Currently runs on local machine, can be deployed to:

- VPS
- Cloudflare Workers
- Railway

### Frontend

Deployed on Vercel:
https://tg-bot-ada-thing.vercel.app

## 📄 License

MIT

## 👥 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

```

```
