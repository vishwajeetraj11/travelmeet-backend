import mongoose from 'mongoose';

const threadSchema = mongoose.Schema(
  {
      
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    //   stories: [
    //       {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'Story',
    //       required: true
    //     }
    // ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

export const Thread = mongoose.model('Thread', threadSchema);