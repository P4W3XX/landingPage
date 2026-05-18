/*
  # Create tables for contact submissions, projects, and testimonials

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - full name
      - `email` (text) - email address
      - `phone` (text, nullable) - phone number
      - `budget` (text, nullable) - selected budget range
      - `scope` (text[], nullable) - project scope tags
      - `care` (text) - selected care plan
      - `post_launch` (text[], nullable) - post-launch change types
      - `message` (text) - project description
      - `created_at` (timestamptz)

    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - project name
      - `category` (text) - e.g. E-commerce
      - `year` (text) - year string
      - `tags` (text[]) - tech tags
      - `image` (text) - image path or URL
      - `link` (text) - external project URL
      - `swatch` (text[]) - color swatches array
      - `sort_order` (int) - display order
      - `created_at` (timestamptz)

    - `testimonials`
      - `id` (uuid, primary key)
      - `text` (text) - quote body
      - `name` (text) - author name
      - `role` (text) - author role/company
      - `sort_order` (int) - display order
      - `created_at` (timestamptz)

  2. Security
    - RLS enabled on all tables
    - contact_submissions: insert-only for anonymous users (public form), no read-back
    - projects: public read, no public write
    - testimonials: public read, no public write
*/

-- contact_submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  budget text,
  scope text[],
  care text NOT NULL DEFAULT 'free',
  post_launch text[],
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert a contact submission"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- projects
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL DEFAULT '',
  year text NOT NULL DEFAULT '',
  tags text[] NOT NULL DEFAULT '{}',
  image text NOT NULL DEFAULT '',
  link text NOT NULL DEFAULT '',
  swatch text[] NOT NULL DEFAULT '{"#1a1a1a","#c08457"}',
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  text text NOT NULL,
  name text NOT NULL,
  role text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);
