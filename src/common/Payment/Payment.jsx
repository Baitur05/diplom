import { PaymentElement } from "@stripe/react-stripe-js";

const Payment = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default Payment;
