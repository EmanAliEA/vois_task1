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
    <div className=" text-white py-12 w-full">
      <form
        onSubmit={handleSubmit}
        className="m-auto border w-1/2 flex gap-4 flex-col border-white p-6 pb-8 rounded-2xl shadow shadow-sky-400"
      >
        <h1 className="text-3xl text-sky-300 font-semibold text-center">
          Checkout
        </h1>
        <p className="text-xl font-semibold">Shipping Address</p>
        <Input text="Name" id="name" />
        <Input text="Email" id="email" type="email" />
        <Input text="Address" id="address" />

        <p className="text-xl font-semibold">Payment Information</p>
        <Input text="Card Number" id="card" />
        <div className="flex justify-between gap-5">
          <Input text="Expiration Date" id="exp" style="w-1/2" />
          <Input text="CVV" id="cvv" style="w-1/2" />
        </div>
        <Button style="self-end">Submit</Button>
      </form>
    </div>
  );
}

export default CheckOut;
