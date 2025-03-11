import Avatar from "../assets/Avatar.png";
import img2 from "../assets/logo1.png";
import img3 from "../assets/Avatar.png";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

const QuestionSection = () => {
  const [mobileDrawerOpen1, setMobileDrawerOpen1] = useState(false);
  const [mobileDrawerOpen2, setMobileDrawerOpen2] = useState(false);
  const [mobileDrawerOpen3, setMobileDrawerOpen3] = useState(false);
  const [mobileDrawerOpen4, setMobileDrawerOpen4] = useState(false);
  const [mobileDrawerOpen5, setMobileDrawerOpen5] = useState(false);
  const [mobileDrawerOpen6, setMobileDrawerOpen6] = useState(false);

  const toggleNavbar1 = () => {
    setMobileDrawerOpen1(!mobileDrawerOpen1);
  };
  const toggleNavbar2 = () => {
    setMobileDrawerOpen2(!mobileDrawerOpen2);
  };
  const toggleNavbar3 = () => {
    setMobileDrawerOpen3(!mobileDrawerOpen3);
  };
  const toggleNavbar4 = () => {
    setMobileDrawerOpen4(!mobileDrawerOpen4);
  };
  const toggleNavbar5 = () => {
    setMobileDrawerOpen5(!mobileDrawerOpen5);
  };
  const toggleNavbar6 = () => {
    setMobileDrawerOpen6(!mobileDrawerOpen6);
  };

  return (
    <section className="w-full px-4 py-8 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Frequently asked questions</h2>
        </div>
        <div>
          <p className="text-gray-600 text-sm md:text-base">Everything you need to know about the product and billing</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-16">
        <div className="space-y-4">
          {/* Question 1 */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleNavbar1}>
              <h3 className="text-base md:text-lg font-medium">Is there a free trial available?</h3>
              <button className="text-gray-500 hover:text-gray-700">
                {mobileDrawerOpen1 ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
              </button>
            </div>
            {mobileDrawerOpen1 && (
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
              </p>
            )}
          </div>

          {/* Question 2 */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleNavbar2}>
              <h3 className="text-base md:text-lg font-medium">Can I change my plan later?</h3>
              <button className="text-gray-500 hover:text-gray-700">
                {mobileDrawerOpen2 ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
              </button>
            </div>
            {mobileDrawerOpen2 && (
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Yes, you can change your plan at any time. Simply go to your account settings and select the plan you want to switch to.
              </p>
            )}
          </div>

          {/* Question 3 */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleNavbar3}>
              <h3 className="text-base md:text-lg font-medium">What is your cancellation policy?</h3>
              <button className="text-gray-500 hover:text-gray-700">
                {mobileDrawerOpen3 ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
              </button>
            </div>
            {mobileDrawerOpen3 && (
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                You can cancel your subscription at any time. If you cancel, you'll still have access to your account until the end of your billing period.
              </p>
            )}
          </div>

          {/* Question 4 */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleNavbar4}>
              <h3 className="text-base md:text-lg font-medium">Can other info be added to an invoice?</h3>
              <button className="text-gray-500 hover:text-gray-700">
                {mobileDrawerOpen4 ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
              </button>
            </div>
            {mobileDrawerOpen4 && (
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Yes, you can add additional information to your invoices. Simply go to your account settings and update your invoice preferences.
              </p>
            )}
          </div>

          {/* Question 5 */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleNavbar5}>
              <h3 className="text-base md:text-lg font-medium">How does billing work?</h3>
              <button className="text-gray-500 hover:text-gray-700">
                {mobileDrawerOpen5 ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
              </button>
            </div>
            {mobileDrawerOpen5 && (
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Billing is done on a monthly basis. You'll be charged on the same day each month based on the plan you selected.
              </p>
            )}
          </div>

          {/* Question 6 */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleNavbar6}>
              <h3 className="text-base md:text-lg font-medium">How do I change my account email?</h3>
              <button className="text-gray-500 hover:text-gray-700">
                {mobileDrawerOpen6 ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
              </button>
            </div>
            {mobileDrawerOpen6 && (
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                To change your account email, go to your account settings and update your email address. You'll receive a confirmation email to verify the change.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10">
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-4">
            <img className="w-12 h-12 rounded-full border-2 border-white" src={Avatar} alt="User" />
            <img className="w-12 h-12 rounded-full border-2 border-white" src={img2} alt="User" />
            <img className="w-12 h-12 rounded-full border-2 border-white" src={img3} alt="User" />
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
