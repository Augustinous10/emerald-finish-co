
CREATE POLICY "Public read gallery objects" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id IN ('gallery', 'blog'));

CREATE POLICY "Admin write gallery objects" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id IN ('gallery', 'blog') AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin update gallery objects" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id IN ('gallery', 'blog') AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin delete gallery objects" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id IN ('gallery', 'blog') AND public.has_role(auth.uid(), 'admin'));
