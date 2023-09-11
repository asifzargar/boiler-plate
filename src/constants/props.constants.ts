import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, FieldValues, UseFormHandleSubmit, UseFormReset, UseFormWatch, FieldErrors, SubmitHandler, } from "react-hook-form";
interface CommonFormProps<T extends FieldValues> {
  onSubmit: SubmitHandler<T>;
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<T>;
  reset: UseFormReset<T>;
  watch: UseFormWatch<T>;
  errors: FieldErrors<T>;
}
export type { CommonFormProps };
