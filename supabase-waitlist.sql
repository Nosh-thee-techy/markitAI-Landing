-- Run this in your Supabase SQL editor to create the waitlist table
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  business_type text,
  monthly_budget text,
  created_at timestamptz default now()
);

-- Optional: enable RLS and allow service role to insert (service role bypasses RLS by default)
alter table public.waitlist enable row level security;

-- Allow inserts from service role (used by API route)
create policy "Service role can insert waitlist"
  on public.waitlist for insert
  with check (true);

-- Allow service role to read (e.g. for admin export)
create policy "Service role can read waitlist"
  on public.waitlist for select
  using (true);
