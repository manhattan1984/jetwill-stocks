import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Jetwill Stocks</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Jetwill Stocks" />
      <link rel="icon" href="/logo-white.ico" />

      <Script
        src="//code.tidio.co/0u4fuaqcowdm1smubnu4xan6eq9nr8a2.js"
        async
      ></Script>
    </>
  );
}
