import Button from "../components/Button";
import Input from "../components/Input";

function CheckOut() {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    // console.log("Form submitted");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    e.target.reset();
  }
  return (
    <div className=" text-white h-screen py-5 lg:py-12 w-full">
      <form
        onSubmit={handleSubmit}
        className="m-auto border  w-3/4 lg:w-1/2  flex gap-2 md:gap-4 flex-wrap  md:flex-col border-white  p-4 md:p-6 md:pb-8 rounded-2xl shadow shadow-sky-400"
      >
        <h1 className="text-2xl md:text-3xl text-sky-300 font-semibold text-center">
          Checkout
        </h1>
        <p className="text-[1rem] md:text-xl font-semibold">Shipping Address</p>
        <Input text="Name" id="name" />
        <Input text="Email" id="email" type="email" />
        <Input text="Address" id="address" />

        <p className="text-[1rem] md:text-xl font-semibold">
          Payment Information
        </p>
        <Input text="Card Number" id="card" />
        <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-5">
          <Input text="Expiration Date" id="exp" style="w-full md:w-1/2" />
          <Input text="CVV" id="cvv" style="w-full md:w-1/2" />
        </div>
        <Button style="!text-[1rem] !self-end !sm:self-end !md:self-end ">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CheckOut;
