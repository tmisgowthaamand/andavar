import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

if (!supabase) {
  console.warn('[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Form submissions will be disabled until configured.')
}

// Database types
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  company?: string
  country: string
  message: string
  created_at?: string
}

export interface OrderSubmission {
  id?: string
  customer_name: string
  email: string
  phone: string
  company?: string
  country: string
  address: string
  notes?: string
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    category: string
  }>
  total_amount: number
  created_at?: string
}