This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Private Live Learning Platform

Minimal invite-only live learning platform  
Built with Next.js 16 (App Router)

---

## 🎯 Project Goal

- Private theological education
- One teacher / pastor (initially)
- Small groups (10–20 people)
- Live video teaching
- Invite-only access
- Subscription-based (membership)

---

## 🧱 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- MongoDB (later)
- NextAuth (later)
- Daily.co (live video)
- Stripe (subscriptions)
- Vercel (deployment)

---

## 📂 Current Project Structure

```text
app/
  ├── layout.tsx
  ├── page.tsx
  ├── globals.css
  └── favicon.ico

public/
  └── svg assets

.next/            # auto-generated
node_modules/     # dependencies

# 🧭 Development Phases

Structured implementation plan for the platform  
Follow phases in order. Do not skip ahead.

---

## Phase 1 – Base Setup (NOW)

- [x] Next.js project created
- [x] TypeScript enabled
- [] App Router structure
    ## 📂 App Router Structure (Checklist)
     app/
      ├── [] (public)/
      │   └── [] page.tsx
      │ 
      ├── [] (auth)/
      │   ├── [] login.tsx
      │   │   └── [] page.tsx
      │   ├── [] register.tsx
      │   │   └── [] page.tsx
      │   └── [] layout.tsx
      │ 
      ├── [] dashboard/
      │   └── [] page.tsx
      │ 
      ├── [] events/
      │   ├── [] page.tsx
      │   └── [] [eventId]/
      │       └── [] page.tsx
      │
      │ 
      ├── [] live/
      │   ├── [] page.tsx
      │   └── [] [eventId]/
      │       └── [] page.tsx
      │ 
      ├── [] archive/
      │   └── [] page.tsx
      │ 
      ├── [] api/
      │   ├── [] auth.ts
      │   ├── [] invites.ts
      │   ├── [] events.ts
      │   ├── [] live.ts
      │   ├── [] stripe.ts
      │   └── [] recordings.ts
      │ 
      ├── [x] layout.tsx
      └── [x] globals.css

- [x] Clean unused assets
- [] Prepare folder structure

---

## Phase 2 – Auth & Invites

- [] NextAuth setup
- [] Invite-only registration
- [] Protected routes

---

## Phase 3 – Events & Live

- [] Events system
- [] Live video integration (Daily)
- [] Recordings

---

## Phase 4 – Payments

- [] Stripe subscriptions
- [] Access control

---

