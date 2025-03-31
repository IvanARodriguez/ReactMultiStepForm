export interface IFormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	agree: boolean;
}

export interface FormStepProps {
	formData: IFormData;
	setFormData: (data: IFormData) => void;
	onNext?: () => void;
	onBack?: () => void;
}
