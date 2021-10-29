import { Connection } from '../../models/Connection';
// import { User } from '../../models/User.js';
import { AppError } from '../../utils/AppError.js';
import { catchAsync } from '../../utils/catchAsync.js';

export const createConnection = catchAsync(async (req, res, next) => {
  const userFrom = req.user.userId;
  const {userTo} = req.params;

  const connection = await Connection.find({
      userFrom, userTo
  });

  if(connection) {
      return next(new AppError('A connection already exists with this pair of users.', 409));
  }

  const newConnection = await Connection.create({
      userTo, userFrom
  });

  res.status(200).json({
    status: 'success',
    connection: newConnection,
  });
});

export const approveConnection = catchAsync(async (req, res, next) => {
    const userFrom = req.user.userId;
    const {userTo} = req.params;
  
    const connection = await Connection.findOneAndUpdate({userFrom, userTo},{approval: true}, {new: true, runValidators: true});
  
    if(!connection) {
        return next(new AppError("The connection you are trying to approve doesn't exist.", 404));
    }
  
    res.status(200).json({
      status: 'success',
      connection,
    });
  });

export const deleteConnection = catchAsync(async (req, res, next) => {
    const userFrom = req.user.userId;
    const {userTo} = req.params;
  
    const connection = await Connection.find({
        userFrom, userTo
    });
  
    if(!connection) {
        return next(new AppError("The connection you are trying to delete doesn\'t exist.", 404));
    }
  
    await connection.remove();
  
    res.status(204).json({
      status: 'success',
    });
  });
