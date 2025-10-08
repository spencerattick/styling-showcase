export default function OrderSummary() {
  return (
    <div className="min-h-screen bg-[#d6e1ff] flex justify-center items-center">
      <div>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div>
          <div>
            <h2>Annual Plan</h2>
            <p>$59.99/year</p>
          </div>
          <p>Change</p>
        </div>
        <button>Proceed to Payment</button>
        <p>Cancel Order</p>
      </div>
    </div>
  );
}
