import { object, string } from "yup";

const validationSchema = object({
    email: string()
        .email("Please enter a valid email address")
        .required("Please enter a email in the field"),
});

export default function validateEmailForm(email) {
    const isWhitoutError = validationSchema.isValidSync({ email });
    return isWhitoutError;
}
