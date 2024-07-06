export type FormValues = {
    city: string;
};

export type MainFormProps = {
    onSubmit: (data: FormValues) => void;
};