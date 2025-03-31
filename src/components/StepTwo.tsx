import { FormStepProps } from '../types';

const StepTwo = ({ formData, setFormData, onNext, onBack }: FormStepProps) => (
	<div className='step'>
		<h2>Step 2: Contact Info</h2>
		<input
			type='text'
			name='email'
			id='email'
			placeholder='Email'
			className='form-input'
			value={formData.email}
			onChange={(e) => setFormData({ ...formData, email: e.target.value })}
		/>
		<input
			type='tel'
			name='phone'
			id='phone'
			className='form-input'
			placeholder='Phone'
			value={formData.phone}
			onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
		/>
		<div className='step-buttons'>
			<button type='button' onClick={onBack}>
				Back
			</button>
			<button type='button' onClick={onNext}>
				Next
			</button>
		</div>
	</div>
);

export default StepTwo;
