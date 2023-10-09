import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { useLocation } from 'react-router-dom';
import AddressForm from './AddressForm';
import OrderSummery from './OrderSummery';
import Payment from './Payment';

const steps = ['Login', 'Address', 'Order summery', 'Payment'];
const CheckOut = () => {
    // const [activeStep, setActiveStep] = React.useState(0);


    const location = useLocation()
    const querySearch = new URLSearchParams(location.search)
    const step = querySearch.get("step")
    
    return (
        <div className='container mx-auto my-10'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step} className='my-10'>
                    {steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <React.Fragment>
                    <div>
                        {
                            step == 1 && <h>Login</h>
                        }
                        {
                            step == 2 && <AddressForm />
                        }
                        {
                            step == 3 && <OrderSummery />
                        }
                        {
                            step == 4 && <Payment />
                        }
                    </div>
                </React.Fragment>

            </Box>
        </div>
    )
}

export default CheckOut