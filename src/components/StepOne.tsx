import { FormStepProps } from '../types';

const StepOne = ({ formData, setFormData, onNext }: FormStepProps) => (
	<div className='step'>
		<h2>Step 1: Personal Info</h2>
		<input
			type='text'
			className='form-input'
			placeholder='First Name'
			value={formData.firstName}
			onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
		/>
		<input
			type='text'
			className='form-input'
			placeholder='Last Name'
			value={formData.lastName}
			onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
		/>
		<div className='step-buttons'>
			<button type='button' style={{ width: '100%' }} onClick={onNext}>
				Next
			</button>
		</div>
	</div>
);

export default StepOne;
