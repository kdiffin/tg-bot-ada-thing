### Plan

1. Document project overview
2. Installation steps
3. Environment setup
4. Features
5. Tech stack
6. API endpoints
7. Development commands

````markdown
# KDiffusion Image Gallery

A web application that displays AI-generated images from a Telegram bot. Users can view, share, and manage their generated images.

## Features

- 🖼️ Responsive image grid layout
- 👤 User-specific image collections
- 🔒 Image visibility management
- 🎨 AI image generation via Telegram bot
- 🔄 Real-time updates with React Query

## Tech Stack

- Frontend:

  - React + TypeScript
  - Vite
  - TanStack Query
  - Tailwind CSS
  - ShadCN UI
  - Supabase Client

- Backend:
  - Supabase (Database + Auth)
  - Telegram Bot (Python)

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Supabase account
- Telegram Bot Token

### Environment Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kdiffusion-gallery.git
cd kdiffusion-gallery
```
````

2. Install dependencies:

```bash
cd client
npm install
```

3. Create `.env` file in client directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Database Schema

### Image Table

- id: number (primary key)
- usersTelegramID: string
- usersName: string
- image: string (base64)
- imagePrompt: string
- public: boolean
- created_at: timestamp

## API Routes

### Client Routes

- `/` - Home page with all public images
- `/user/:username` - User-specific image collection

### Supabase Endpoints

- `GET /Image` - Fetch all public images
- `GET /Image?usersName=eq.{username}` - Fetch user's images
- `PATCH /Image?id=eq.{id}` - Update image visibility

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
