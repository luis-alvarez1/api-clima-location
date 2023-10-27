import { Router } from 'express';
import { GetClimateByUserId, HealthCheck } from '../controllers/Climate.controller';
import { body, param } from 'express-validator';
import validateFields from '../middlewares/validator/validateFields';

const router = Router();

router.get('/', HealthCheck);
router.get(
    '/:id',
    [
        param('id', 'User Id is required').notEmpty().isInt({ min: 1, max: 10 }),
        body('units', 'Invalid value for units')
            .optional()
            .toLowerCase()
            .isIn(['metric', 'imperial', 'kelvin']),
        validateFields,
    ],
    GetClimateByUserId,
);

const ClimateRoutes = router;
export default ClimateRoutes;
