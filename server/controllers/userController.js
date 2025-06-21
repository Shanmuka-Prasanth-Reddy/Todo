const User = require('../models/userModel');

// Create or update user
exports.createOrUpdateUser = async (req, res) => {
  try {
    const { email, notificationPreferences } = req.body;
    
    const user = await User.findOneAndUpdate(
      { email },
      { 
        email,
        notificationPreferences: {
          ...notificationPreferences,
          enabled: notificationPreferences?.enabled ?? true,
          reminderTime: notificationPreferences?.reminderTime ?? 12
        }
      },
      { upsert: true, new: true }
    );
    
    res.status(200).json(user);
  } catch (error) {
    console.error('Error creating/updating user:', error);
    res.status(500).json({ error: 'Failed to create/update user' });
  }
};

// Get user by email
exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Failed to get user' });
  }
}; 