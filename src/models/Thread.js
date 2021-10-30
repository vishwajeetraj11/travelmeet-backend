import mongoose from 'mongoose';

const threadSchema = mongoose.Schema(
  {
      
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      stories: [
        {
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
        }
      ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

export const Thread = mongoose.model('Thread', threadSchema);
