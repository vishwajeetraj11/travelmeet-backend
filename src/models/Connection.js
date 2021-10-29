import mongoose from 'mongoose';

const connectionSchema = mongoose.Schema(
  {
      userFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      userTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      approval: {
          type: Boolean,
          default: false,
      }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

export const Connection = mongoose.model('Connection', connectionSchema);
