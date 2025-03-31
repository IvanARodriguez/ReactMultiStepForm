import { useState } from 'react';
import '../styles/MultiStepForm.css';
import ProgressBar from './ProgressBar';
import StepOne from './StepOne';
import { IFormData } from '../types';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export const MultiStepForm = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [formData, setFormData] = useState<IFormData>({
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		agree: false,
	});

	const renderStep = () => {
		if (currentStep == 1)
			return (
				<StepOne
					formData={formData}
					setFormData={setFormData}
					onNext={() => setCurrentStep(2)}
				/>
			);
		if (currentStep === 2)
			return (
				<StepTwo
					formData={formData}
					setFormData={setFormData}
					onNext={() => setCurrentStep(3)}
					onBack={() => setCurrentStep(1)}
				/>
			);

		if (currentStep === 3)
			return (
				<StepThree
					formData={formData}
					setFormData={setFormData}
					onNext={() => setCurrentStep(3)}
					onBack={() => setCurrentStep(1)}
				/>
			);
		return <></>;
	};
	return (
		<div className='main-form'>
			<ProgressBar step={currentStep} totalSteps={3} />
			<form>{renderStep()}</form>
		</div>
	);
};
