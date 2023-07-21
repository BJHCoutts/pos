import { createClient } from '@supabase/supabase-js'
import { supabaseUrl, supabaseApiKey } from '../creds/supabaseCreds'

export const supabase = createClient(supabaseUrl, supabaseApiKey)