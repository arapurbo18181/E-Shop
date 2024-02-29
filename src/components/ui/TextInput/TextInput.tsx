import { Input } from "@material-tailwind/react";
import { Field } from "formik";
interface Field {
  name: string;
  value: string;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormTouched {
  [key: string]: boolean;
}

interface FormMeta {
  value: string;
  error?: string;
  touched: boolean;
  initialValue: string;
  initialTouched: boolean;
  initialError?: string;
}

interface FormState {
  values: FormValues;
  errors: FormErrors;
  touched: FormTouched;
  status?: undefined;
  isSubmitting: boolean;
  isValidating: boolean;
  submitCount: number;
  initialValues: FormValues;
  initialErrors: FormErrors;
  initialTouched: FormTouched;
  initialStatus?: undefined;
  isValid: boolean;
  dirty: boolean;
  validateOnBlur: boolean;
  validateOnChange: boolean;
  validateOnMount: boolean;
}

interface FormField {
  field: Field;
  form: FormState;
  meta: FormMeta;
}

interface InputProps {
  label: string;
}

export const TextInput = ({ label }: InputProps) => {
  return (
    <div className="w-72">
      <Field name={label}>
        {({ field, meta }: FormField) => {
          return (
            <div>
              <Input crossOrigin={""} label={label} {...field} />
              {meta.touched && meta.error ? (
                <div className="text-red-500"> {meta.error} </div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
