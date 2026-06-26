/*
# Create News Platform Database Schema

## 1. New Tables
- `categories` - News categories (জাতীয়, রাজনীতি, অর্থনীতি, etc.)
  - `id` (uuid, primary key)
  - `name` (text, not null) - Bengali category name
  - `slug` (text, unique, not null) - URL-friendly slug
  - `icon` (text) - Lucide icon name
  - `color` (text) - Hex color code
  - `created_at` (timestamptz)

- `authors` - News authors
  - `id` (uuid, primary key)
  - `name` (text, not null) - Bengali author name
  - `avatar` (text) - Image URL
  - `bio` (text) - Author bio
  - `role` (text) - Author role/title
  - `created_at` (timestamptz)

- `articles` - News articles
  - `id` (uuid, primary key)
  - `title` (text, not null) - Bengali article title
  - `summary` (text) - Short summary
  - `content` (text) - Full article content
  - `category_id` (uuid, references categories)
  - `author_id` (uuid, references authors)
  - `image_url` (text) - Featured image
  - `published_at` (timestamptz)
  - `is_breaking` (boolean, default false)
  - `read_time` (integer) - Estimated read time in minutes
  - `views` (integer, default 0)
  - `tags` (text[]) - Array of tags
  - `created_at` (timestamptz)

## 2. Security
- Enable RLS on all three tables
- Allow public (anon + authenticated) read access since this is a public news platform
- No write policies on articles/categories/authors as those are managed by the admin console
- No sign-in/auth required for readers
*/

CREATE TABLE IF NOT EXISTS categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    slug text UNIQUE NOT NULL,
    icon text DEFAULT 'newspaper',
    color text DEFAULT '#2E4CB2',
    created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS authors (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    avatar text,
    bio text,
    role text,
    created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS articles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    summary text,
    content text,
    category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
    author_id uuid REFERENCES authors(id) ON DELETE SET NULL,
    image_url text,
    published_at timestamptz DEFAULT now(),
    is_breaking boolean NOT NULL DEFAULT false,
    read_time integer NOT NULL DEFAULT 3,
    views integer NOT NULL DEFAULT 0,
    tags text[] DEFAULT '{}',
    created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_categories" ON categories;
CREATE POLICY "anon_select_categories" ON categories FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_select_authors" ON authors;
CREATE POLICY "anon_select_authors" ON authors FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_select_articles" ON articles;
CREATE POLICY "anon_select_articles" ON articles FOR SELECT
  TO anon, authenticated USING (true);
