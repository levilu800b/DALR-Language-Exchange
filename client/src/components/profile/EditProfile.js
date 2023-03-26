
import React,{ useState } from "react";

export default function EditProfile({ user,setUser }) {
const [firstname, setFirstname] = useState("");
const [secondname, setSecondname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [language_speak, setLanguage_speak] = useState("");
const [language_interest, setLanguage_interest] = useState("");
const [city, setCity] = useState("");
const [country, setCountry] = useState("");

const updateProfile = async (e) => {
    e.preventDefault();
    try {
        const body = { firstname, secondname, email, password, language_speak, language_interest, city, country };
        const response = await fetch(`api/register/${user.user_email}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
      });
      const updatedUser = await response.json();
setUser(updatedUser);
        console.log(response);
    } catch (err) {
        console.error(err.message);
    }
};

  return (
    <div>
      <h1 className="text-center my-5">Edit Profile</h1>
      <form onSubmit={updateProfile}>
        <input
          type="text"
          className="form-control my-3"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="First Name"
        />
        <input

          type="text"
          className="form-control my-3"
          value={secondname}
          onChange={(e) => setSecondname(e.target.value)}
          placeholder="Second Name"
        />
        <input
          type="text"
          className="form-control my-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          className="form-control my-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          className="form-control my-3"
          value={language_speak}
          onChange={(e) => setLanguage_speak(e.target.value)}
          placeholder="Language Speak"
        />
        <input
          type="text"
          className="form-control my-3"
          value={language_interest}
          onChange={(e) => setLanguage_interest(e.target.value)}
          placeholder="Language Interest"
        />
        <input
          type="text"
          className="form-control my-3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <input
          type="text"
          className="form-control my-3"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <button className="btn btn-success btn-block">Edit</button>
      </form>
    </div>
  );
}








