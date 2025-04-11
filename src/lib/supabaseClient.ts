import { createClient } from '@supabase/supabase-js';

// These types will ensure type safety for your Supabase tables
export type Database = {
    public: {
        Tables: {
            locations: {
                Row: {
                    id: string;
                    created_at: string;
                    name: string;
                    google_maps_link: string;
                    event_url: string;
                    email: string;
                    latitude: number;
                    longitude: number;
                    approved: boolean;
                };
                Insert: {
                    id?: string;
                    created_at?: string;
                    name: string;
                    google_maps_link: string;
                    event_url: string;
                    email: string;
                    latitude: number;
                    longitude: number;
                    approved?: boolean;
                };
                Update: {
                    id?: string;
                    created_at?: string;
                    name?: string;
                    google_maps_link?: string;
                    event_url?: string;
                    email?: string;
                    latitude?: number;
                    longitude?: number;
                    approved?: boolean;
                };
            };
        };
    };
};

// Check if environment variables are defined
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default supabase; 