// This file is intentionally left empty as Supabase integration is currently disabled.
// When ready to integrate Supabase, uncomment and configure the code below:

/*
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
*/

// For now, we'll export a dummy object to prevent import errors
export const supabase = {
  auth: {
    signIn: () => Promise.resolve({ user: null, error: new Error('Supabase is currently disabled') }),
    signOut: () => Promise.resolve({ error: null }),
  },
  from: () => ({
    select: () => Promise.resolve([]),
    insert: () => Promise.resolve({ data: null, error: new Error('Supabase is currently disabled') }),
    update: () => Promise.resolve({ data: null, error: new Error('Supabase is currently disabled') }),
    delete: () => Promise.resolve({ data: null, error: new Error('Supabase is currently disabled') }),
  }),
};