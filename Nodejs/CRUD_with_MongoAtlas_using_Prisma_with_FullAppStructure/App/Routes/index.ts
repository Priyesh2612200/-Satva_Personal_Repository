import express from 'express';
import HrRoutes from './Hr/HrRoutes'
import EmployeeRoutes from './Employee/EmployeeRoutes'

const router = express.Router();

router.use(HrRoutes)
router.use(EmployeeRoutes)

export default router