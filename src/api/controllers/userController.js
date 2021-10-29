import { User } from '../../models/User.js';
import { AppError } from '../../utils/AppError.js';
import { catchAsync } from '../../utils/catchAsync.js';

export const getProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.userId);

  if (!user) {
    return next(new AppError('No user found.', 404));
  }
  res.status(200).json({
    status: 'success',
    user,
  });
});


export const updateProfile = catchAsync(async (req, res, next) => {
  // const user = await User.findById(req.user.userId);

  // if (!user) {
  //   return next(new AppError('No user found.', 404));
  // }
  res.status(200).json({
    status: 'success',
    // user,
  });
});


export const addProfile = catchAsync(async (req, res, next) => {
  // const user = await User.findById(req.user.userId);

  // if (!user) {
  //   return next(new AppError('No user found.', 404));
  // }
  console.log('params ',req.params);
  console.log('body ',req.body);
  res.status(200).json({
    status: 'success',
    // user,
  });
});

