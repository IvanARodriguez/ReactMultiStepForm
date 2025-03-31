import '../styles/ProgressBar.css';

interface ProgressBarProps {
	step: number;
	totalSteps: number;
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
	const progress = (step / totalSteps) * 100;
	return (
		<div className='progress-container'>
			<div className='progress-labels'>
				<span>
					Step {step} of {totalSteps}
				</span>
			</div>
			<div className='progress-bar'>
				<div
					style={{ width: `${progress}%` }}
					className='progress-bar-fill'
				></div>
			</div>
		</div>
	);
};

export default ProgressBar;
