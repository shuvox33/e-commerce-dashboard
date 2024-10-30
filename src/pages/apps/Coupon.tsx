import { FormEvent, useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumber, setIncludeNumber] = useState<boolean>(false);
  const [includeCharacter, setIncludeCharacter] = useState<boolean>(false);
  const [includeSymbol, setIncludeSymbol] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");

  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const allNumbers = "1234567890";
  const allSymbols = "!@#$%^&*()_+";

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!includeNumber && !includeCharacter && !includeSymbol)
      return alert("Please Select One At Least");

    let result: string = prefix || "";
    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (includeCharacter) entireString += allLetters;
      if (includeNumber) entireString += allNumbers;
      if (includeSymbol) entireString += allSymbols;

      const randomNum: number = ~~(Math.random() * entireString.length);
      result += entireString[randomNum];
    }

    setCoupon(result);
  };

  useEffect(()=>{
    setIsCopied(false)
  },[coupon])

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form onSubmit={submitHandler} className="coupon-form">
            <input
              type="text"
              placeholder="text to include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              max={20}
              min={8}
            />

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeCharacter}
                onChange={(e) => setIncludeCharacter((prev) => !prev)}
              />
              <span>Character</span>

              <input
                type="checkbox"
                checked={includeSymbol}
                onChange={(e) => setIncludeSymbol((prev) => !prev)}
              />
              <span>Symbol</span>

              <input
                type="checkbox"
                checked={includeNumber}
                onChange={(e) => setIncludeNumber((prev) => !prev)}
              />
              <span>Number</span>
            </fieldset>

            <button type="submit">Generate</button>
          </form>

          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
