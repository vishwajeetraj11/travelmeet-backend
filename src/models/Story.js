import mongoose from 'mongoose';

const storySchema = mongoose.Schema(
  {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      thread: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thread',
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      title: {
          type: String,
          required: true,
      },
      photo: {
        type: String,
      },
      startDate: {
      default: Date
      },
      endDate: {
        type: Date,
      }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

export const Story = mongoose.model('Story', storySchema);
