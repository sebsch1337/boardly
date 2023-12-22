<!-- @format -->

<p align="center"><img width="150" alt="image" src="./public/logo.svg"></p>
<h3 align="center">Boardly</h3>
<p align="center">Accelerate Your Team's Progress</p>
<p align="center"><a href="https://boardly-1337.vercel.app/">https://boardly-1337.vercel.app/</a></p>

## Important

This is a non-productive portfolio app without further development.
This full stack Trello clone is based on Next.js 14, Server Actions, React, Prisma, Stripe, Tailwind, MySQL.

Main focus is on using server actions instead of API calls for the database communication. This project helped me to understand the concept of server actions and evaluates the developer experience, stability and performance of this new approach. Additionally, i learned how to use an external payment provider to enable the implementation of pro features.

Credits to [Antonio Erdeljac](https://github.com/AntonioErdeljac/next13-trello/) for his awesome tutorials.

## Overview

Boardly is a simple kanban board tool for collaboration.

## Features

- Login via Magic Link, Google, Facebook, GitHub
- Create multiple workspaces
- Manage teams and collaborate
- Create, move, delete boards
- Create, move, delete lists and tasks
- Audit any action in the activity log
- Upgrade to Pro membership for unlimited boards

## Used Tech Stack

- React library
- Next.JS 14
- TypeScript for typesafe developing
- TailwindCSS for styling
- Shadcn as component base
- Prisma as ORM
- MySQL as database
- Clerk as auth provider
- Zustand for global states
- Lucide for icons
- Stripe API for payments
- Unsplash API for random background images

## Getting Started

### Installation

`npm install`

### Create .env File

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

### Setup Prisma

`npx prisma generate
npx prisma db push`

### Run Dev Environment

`npm run dev`

<a href="http://localhost:3000">http://localhost:3000</a>

## About

I'm looking forward to start exciting projects with you as a 100% remote developer.

You can find more informations about me and my tech stack on my GitHub page.
