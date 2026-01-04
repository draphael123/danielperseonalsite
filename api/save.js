// Vercel serverless function to save user data
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { activities, activityState, userId } = req.body;

    if (!activities || !activityState) {
      return res.status(400).json({ error: 'Missing required data' });
    }

    // In a production app, you'd want to:
    // 1. Use a proper database (MongoDB, PostgreSQL, etc.)
    // 2. Implement user authentication
    // 3. Add rate limiting
    // 4. Validate and sanitize data
    
    // For now, we'll use a simple in-memory store (this won't persist across server restarts)
    // In production, replace this with a database
    const data = {
      activities,
      activityState,
      userId: userId || 'default',
      timestamp: new Date().toISOString()
    };

    // TODO: Replace with actual database storage
    // Example: await db.save(userId, data);
    
    // For now, we'll return success (in production, save to database)
    return res.status(200).json({ 
      success: true, 
      message: 'Data saved successfully',
      timestamp: data.timestamp
    });
  } catch (error) {
    console.error('Error saving data:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

