"use client";
import { useState } from "react";
import EditableImage from "@/components/layout/EditableImage";
import { useProfile } from "@/components/UseProfile";

export default function UserFrom({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();

  return (
    <div className="flex gap-4">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px] min-w-[100px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            name: userName,
            image,
            phone,
            streetAddress,
            postalCode,
            city,
            country,
            admin
          })
        }
      >
        <label>First and last name</label>
        <input
          type="text"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
          placeholder="First and last name"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder={"email"}
          disabled={true}
          value={user.email}
        />
        <label>Phone</label>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <label>Street address</label>
        <input
          type="text"
          placeholder="Street address"
          value={streetAddress}
          onChange={(ev) => setStreetAddress(ev.target.value)}
        />
        <div className="flex gap-2">
          <div>
            <label>Postal code</label>
            <input
              type="text"
              placeholder="Postal code"
              value={postalCode}
              onChange={(ev) => setPostalCode(ev.target.value)}
            />
          </div>
          <div className="grow">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(ev) => setCity(ev.target.value)}
            />
          </div>
        </div>
        <label>Country</label>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(ev) => setCountry(ev.target.value)}
        />
        {loggedInUserData?.admin && (
          <div>
            <label
              className="p-2 inline-flex items-center gap-2 mb-2"
              htmlFor="adminCb"
            >
              <input
                className=""
                id="adminCb"
                type="checkbox"
                value="1"
                checked={admin}
                onChange={(ev) => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
