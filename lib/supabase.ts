import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://oxqxwygtxibgumykepaf.supabase.co"
const supabasePublishableKey = "sb_publishable_31q2dv3IixiwtcvqvU9PlA_6AExaTHF"

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})