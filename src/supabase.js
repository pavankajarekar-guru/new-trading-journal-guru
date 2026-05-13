import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lziqfwxtibrikhzilnbu.supabase.co/rest/v1/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6aXFmd3h0aWJyaWtoemlsbmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NjkyNzcsImV4cCI6MjA5NDI0NTI3N30.wHzeJ2UawmuBdnkyCoutoxn7Wcoa52AV03QmJhoO9FM'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
