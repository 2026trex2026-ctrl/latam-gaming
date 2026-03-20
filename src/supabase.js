import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://wusidleblbptoyiogcvq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1c2lkbGVibGJwdG95aW9nY3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMzU5NDgsImV4cCI6MjA4OTYxMTk0OH0.jTDPdTw2RxpzfoNrEGEc3tlbYNedYCNS9SV8q4KzXx8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)