import * as React from 'react';
import {Box,Stepper,Step,StepButton,Button,Typography} from '@mui/material';

// Local:
import CartDisplay from './CartDisplay';
import Delivery from './Delivery';
import Purchase from './Purchase';
import OrderCompleted from './OrderCompleted';
const steps = ['Cart','Delivery','Purchase',];

export default function SpeedDialCheckout() {
 
  // Component states:
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{[k: number]: boolean}>({});
  
  // States manipulations:
  const completedSteps = () => { return Object.keys(completed).length;};
  const isLastStep = () => {return activeStep === steps.length - 1;};
  const allStepsCompleted = () => {return completedSteps() === steps.length;};
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()? 
      steps.findIndex((step, i) => !(i in completed)):
      activeStep + 1;
      setActiveStep(newActiveStep);
  };
  const handleBack = () => {setActiveStep((prevActiveStep) => prevActiveStep - 1);};
  const handleStep = (step: number) => () => {setActiveStep(step);};
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep}>
         {steps.map((label, index) => (
          <Step  key={label} completed={completed[index]}>
            <StepButton  color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
          ))}
        </Stepper>

        <Box sx={{overflow:'hidden'}}>
           {
              allStepsCompleted() ? <OrderCompleted/> :    
              (
                <Box>
                  <Box sx={{ mt: 2, mb: 1, py: 1, height:'400px',borderRadius:'10px', padding:'10px',overflow:'hidden',minWidth:'450px'}}>
                     {
                       activeStep === 0 && <CartDisplay/>
                     }
                     {
                       activeStep === 1 && <Delivery/>
                     }
                     {
                       activeStep === 2 && <Purchase/>
                     }
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleComplete}>
                          {completedSteps() === steps.length - 1
                            ? 'Finish'
                            : 'Next'}
                        </Button>
                   </Box>
                </Box>
              )
          }
        </Box>
      </Box>
    </Box>
  );
}


// Styles here:
const containerStyle ={
  backgroundColor:'#fff',
  borderRadius:'10px',
  padding: '20px',
  height:{md:'550px',sm:'550px',xs:'600px'},
  width:'75%',
  boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)',
  minWidth:'450px'
};

