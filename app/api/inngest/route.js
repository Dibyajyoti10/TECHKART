import { serve } from 'inngest/nextjs';
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from '@/config/inngest';
import { sync } from 'motion';

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
        
    ]
})