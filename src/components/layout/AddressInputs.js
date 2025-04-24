export default function AddressInputs({
  addressProps,
  setAddressProp,
  disabled = false,
}) {
  const { phone, streetAddress, postalCode, city, country } = addressProps;
  return (
    <>
      <label>Phone</label>
      <input
        disabled={disabled}
        type="tel"
        placeholder="Phone number"
        value={phone || ""}
        required={true}
        onChange={(ev) => setAddressProp("phone", ev.target.value)}
      />
      <label>Street address</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Street address"
        value={streetAddress || ""}
        required={true}
        onChange={(ev) => setAddressProp("streetAddress", ev.target.value)}
      />
      <div className="flex gap-2">
        <div>
          <label>Postal code</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="Postal code"
            value={postalCode || ""}
            required={true}
            onChange={(ev) => setAddressProp("postalCode", ev.target.value)}
          />
        </div>
        <div className="grow">
          <label>City</label>
          <input
            disabled={disabled}
            type="text"
            placeholder="City"
            value={city || ""}
            required={true}
            onChange={(ev) => setAddressProp("city", ev.target.value)}
          />
        </div>
      </div>
      <label>Country</label>
      <input
        disabled={disabled}
        type="text"
        placeholder="Country"
        value={country || ""}
        required={true}
        onChange={(ev) => setAddressProp("country", ev.target.value)}
      />
    </>
  );
}
