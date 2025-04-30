import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://YOUR-PROJECT-REF.supabase.co',
  'YOUR-ANON-PUBLIC-KEY'
);
