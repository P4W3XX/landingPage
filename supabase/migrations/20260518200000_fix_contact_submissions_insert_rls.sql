/*
  contact_submissions is insert-only for the public form (no SELECT for anon).
  Client inserts must not use .select() — use a client-generated uuid for id.
*/

DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can insert a contact submission" ON contact_submissions;

CREATE POLICY "Anyone can insert a contact submission"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
