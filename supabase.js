const SUPABASE_URL = "https://bqnkuxawnksjufkjkabv.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_J41mt6w74FTBFBN8nj5LnQ_8ynQULAo";

const queueDB = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);