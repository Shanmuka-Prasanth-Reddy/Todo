const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  notificationPreferences: {
    enabled: {
      type: Boolean,
      default: true
    },
    reminderTime: {
      type: Number,
      default: 12 // hours before deadline
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); 