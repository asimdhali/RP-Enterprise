import React, { useContext, useState } from "react";
import { Package2, CreditCard } from "lucide-react";
import { CartContext } from "../Root/Root";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !validateUserDetails()) {
      alert("Please fill in all required fields.");
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { userDetails, cart });
    alert("Order Submitted Successfully!");
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, item) => total + item.discountPrice * item.quantity,
      0
    );
  };

  const validateUserDetails = () => {
    const { name, email, address, phone } = userDetails;
    return name && email && address && phone;
  };

  const shippingCost = 60;
  const grandTotal = calculateSubtotal() + shippingCost;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-100 py-8">
      {/* Checkout Progress Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <ProgressStep
            step={1}
            label="Delivery Address"
            icon={<Package2 className="w-6 h-6" />}
            isActive={currentStep >= 1}
          />
          <ProgressConnector />
          <ProgressStep
            step={2}
            label="Payment Method"
            icon={<CreditCard className="w-6 h-6" />}
            isActive={currentStep >= 2}
          />
          <ProgressConnector />
          <ProgressStep
            step={3}
            label="Confirm Order"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
            isActive={currentStep >= 3}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {currentStep === 1 && (
            <StepOne
              userDetails={userDetails}
              onChange={handleInputChange}
              onNext={handleNextStep}
            />
          )}

          {currentStep === 2 && (
            <StepTwo
              subtotal={calculateSubtotal()}
              shippingCost={shippingCost}
              total={grandTotal}
              onPrevious={handlePreviousStep}
              onNext={handleNextStep}
            />
          )}

          {currentStep === 3 && (
            <StepThree
              subtotal={calculateSubtotal()}
              shippingCost={shippingCost}
              total={grandTotal}
              onPrevious={handlePreviousStep}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProgressStep = ({ step, label, icon, isActive }) => {
  return (
    <div
      className={`flex items-center ${
        isActive ? "text-blue-600" : "text-gray-400"
      }`}
    >
      {icon}
      <span className="font-medium ml-2">{label}</span>
    </div>
  );
};

const ProgressConnector = () => (
  <hr className="flex-grow mx-4 border-t border-gray-300" />
);

const StepOne = ({ userDetails, onChange, onNext }) => (
  <div className="lg:w-2/3 mx-auto">
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Package2 className="w-5 h-5" />
        <h2 className="text-xl font-semibold">Shipping Details</h2>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Full Name"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={onChange}
            required
          />
          <InputField
            label="Email Address"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={onChange}
            required
          />
        </div>

        <InputField
          label="Shipping Address"
          id="address"
          name="address"
          value={userDetails.address}
          onChange={onChange}
          type="textarea"
          required
        />

        <InputField
          label="Phone Number"
          id="phone"
          name="phone"
          value={userDetails.phone}
          onChange={onChange}
          type="tel"
          required
        />
      </form>
    </div>
    <NavigationButtons onNext={onNext} />
  </div>
);

const StepTwo = ({ subtotal, shippingCost, total, onPrevious, onNext }) => (
  <div className="lg:w-1/3 mx-auto">
    <PaymentSummary
      subtotal={subtotal}
      shippingCost={shippingCost}
      total={total}
    />
    <NavigationButtons onPrevious={onPrevious} onNext={onNext} />
  </div>
);

const StepThree = ({ subtotal, shippingCost, total, onPrevious, onSubmit }) => (
  <div className="lg:w-1/3 mx-auto">
    <PaymentSummary
      subtotal={subtotal}
      shippingCost={shippingCost}
      total={total}
    />
    <button
      onClick={onSubmit}
      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
    >
      Confirm Order
    </button>
    <button
      onClick={onPrevious}
      className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-4"
    >
      Previous
    </button>
  </div>
);

const InputField = ({ label, id, name, value, onChange, type = "text", required }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        required={required}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        required={required}
      />
    )}
  </div>
);

const PaymentSummary = ({ subtotal, shippingCost, total }) => (
  <div className="bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-8">
    <div className="flex items-center gap-2 mb-6">
      <CreditCard className="w-5 h-5" />
      <h2 className="text-xl font-semibold">Payment Summary</h2>
    </div>
    <div className="space-y-4">
      <SummaryItem label="Subtotal" value={`৳${subtotal}`} />
      <SummaryItem label="Shipping" value={`৳${shippingCost}`} />
      <div className="border-t pt-4 mt-4">
        <SummaryItem
          label="Total"
          value={`৳${total}`}
          isBold={true}
          isBlue={true}
        />
      </div>
    </div>
  </div>
);

const SummaryItem = ({ label, value, isBold = false, isBlue = false }) => (
  <div
    className={`flex justify-between ${isBold ? "text-lg font-semibold" : ""}`}
  >
    <span className="text-gray-600">{label}</span>
    <span className={`${isBlue ? "text-blue-600" : ""}`}>{value}</span>
  </div>
);

const NavigationButtons = ({ onPrevious, onNext }) => (
  <div className="flex justify-between mt-6">
    {onPrevious && (
      <button
        onClick={onPrevious}
        className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Previous
      </button>
    )}
    {onNext && (
      <button
        onClick={onNext}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Next
      </button>
    )}
  </div>
);

export default CheckoutPage;
