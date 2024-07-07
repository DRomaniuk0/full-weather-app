import {FC} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import {FormValues, MainFormProps} from "./Main.types";
import {CITY_ENTRY_PATTERN} from "./Main.constants";

const MainForm: FC<MainFormProps> = ({ onSubmit }) => {
    const { control, handleSubmit, reset } = useForm<FormValues>();

    const handleFormSubmit = (data: FormValues): void => {
        onSubmit(data);
        reset();
    };

    return (
        <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} noValidate sx={{ mt: 1 }}>
            <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{
                    required: 'City is required',
                    pattern: {
                        value: CITY_ENTRY_PATTERN,
                        message: 'Only letters are allowed'
                    }
                }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="Enter city"
                        autoFocus
                        error={!!error}
                        helperText={error ? error.message : ''}
                    />
                )}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
            >
                Get Weather
            </Button>
        </Box>
    );
};

export default MainForm;
