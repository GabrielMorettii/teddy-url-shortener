import {
  ValidationComposite,
  RequiredFieldValidation,
} from "@/validation/validators";
import { type Validation } from "@/presentation/protocols";

export const makeCreateShortUrlValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  for (const field of ["url"]) {
    validations.push(new RequiredFieldValidation(field));
  }

  return new ValidationComposite(validations);
};
