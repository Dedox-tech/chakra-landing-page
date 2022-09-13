import { object, string } from "yup";

const validationSchema = object({
    stringField: string().required("Please enter a value in the field"),
});

export default function validateStringForm(stringField) {
    const isWhitoutError = validationSchema.isValidSync({ stringField });
    return isWhitoutError;
}
