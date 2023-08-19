export interface ContactFormInputsType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EmailPattern =
  "^(?=.{5,100}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
const NamePattern = "^[a-zA-Z\\s]{5,100}$"; // letters and space

const PhoneNumberPattern = "^[0-9+]{11,14}$"; //plus and numbers

export const ContactFormInputsArray = [
  {
    name: "name",
    label: "Name",
    required: true,
    pattern: NamePattern,
    errorText: "Example: Mary Magdalene. 5-100 characters",
  },
  {
    name: "email",
    label: "Email",
    required: true,
    type: "email",
    pattern: EmailPattern,
    errorText: "Please enter a valid email: example@gmail.com",
  },
  {
    name: "phone",
    label: "Phone",
    required: true,
    type: "tel",
    pattern: PhoneNumberPattern,
    errorText: "Phone Number is invalid",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    pattern: "^.{20,1000}", //The validation on textarea works
    errorText: "Message should have between 20 and 1000 characters",
  },
];
