import { API } from ".";
import { verifyPaymentUrl } from "./constants/url";

export const verifyPayment = (
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature
) => {
  return API.post(verifyPaymentUrl, {
    razorpayOrderId: razorpayOrderId,
    razorpayPaymentId: razorpayPaymentId,
    razorpaySignature: razorpaySignature,
  });
};
