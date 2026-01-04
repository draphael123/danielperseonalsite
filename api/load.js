// Vercel serverless function to load user data
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId } = req.query;

    // In a production app, you'd want to:
    // 1. Use a proper database
    // 2. Implement user authentication
    // 3. Validate userId
    
    // TODO: Replace with actual database retrieval
    // Example: const data = await db.load(userId || 'default');
    
    // For now, return empty data (in production, load from database)
    // This allows the frontend to work with localStorage as fallback
    return res.status(200).json({ 
      success: true,
      data: null, // No cloud data yet, use localStorage
      message: 'No cloud data found, using local storage'
    });
  } catch (error) {
    console.error('Error loading data:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

