import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const userAccountSchema = new mongoose.Schema({
  accountId: {
    type: String,
    default: () => uuidv4(),
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  userName : {
    type : String,
    required : true,
    unique : true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Guest', 'Admin', 'Employee'],
    default: 'Guest'
  },
  linkedProfile: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'role',
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: null
  }
}, { timestamps: true });

// Hash password before save
userAccountSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Hash password on update if it’s changed
userAccountSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      update.password = await bcrypt.hash(update.password, salt);
      this.setUpdate(update);
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const User = mongoose.model('UserAccount', userAccountSchema);
export default User;
