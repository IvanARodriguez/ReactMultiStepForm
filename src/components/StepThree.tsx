import { FormStepProps } from '../types';

const StepThree = ({ formData, setFormData, onBack }: FormStepProps) => (
	<div className='step'>
		<h2>Step 3: Terms and Conditions</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eius
			eum nam eveniet ut quae veritatis ad deserunt reprehenderit repellendus
			dignissimos sunt obcaecati voluptatum amet odit, soluta fugit corporis ex!
		</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur
			reprehenderit obcaecati, expedita neque dolores minus iure suscipit, culpa
			laboriosam minima officia aliquam quasi quod voluptatum debitis? Earum,
			eos. Voluptatum, ipsam est inventore quae neque facilis repellat,
			doloremque quas saepe consequatur quisquam quod consectetur sint tempore,
			vel magni a quidem!
		</p>
		<div className='checkInput'>
			<input
				type='checkbox'
				id='agree'
				checked={formData.agree}
				onChange={() => {
					setFormData({ ...formData, agree: !formData.agree });
				}}
			/>
			<label htmlFor='agree'>I agree to these terms and conditions</label>
		</div>
		<div className='step-buttons'>
			<button type='button' onClick={onBack}>
				Back
			</button>
			<button type='submit'>Next</button>
		</div>
	</div>
);

export default StepThree;
