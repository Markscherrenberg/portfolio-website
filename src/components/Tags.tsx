"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Cookies from "@/components/Cookies";

const Tags = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(true);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("cookieChoice");
    if (cookieChoice === "accepted") {
      setCookiesAccepted(true);
    }
  }, []);

  const onAccept = () => {
    setCookiesAccepted(true);
  };

  const onReject = () => {
    setCookiesAccepted(false);
  };

  if (process.env.NEXT_PUBLIC_NODE_ENV === "production" && cookiesAccepted) {
    return (
      <>
        {/*<Script id="hotjar">*/}
        {/*  {`*/}
        {/*  (function (h, o, t, j, a, r) {*/}
        {/*    h.hj =*/}
        {/*      h.hj ||*/}
        {/*      function () {*/}
        {/*        // eslint-disable-next-line prefer-rest-params*/}
        {/*        (h.hj.q = h.hj.q || []).push(arguments);*/}
        {/*      };*/}
        {/*    h._hjSettings = { hjid: 2554786, hjsv: 6 };*/}
        {/*    a = o.getElementsByTagName("head")[0];*/}
        {/*    r = o.createElement("script");*/}
        {/*    r.async = 1;*/}
        {/*    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;*/}
        {/*    a.appendChild(r);*/}
        {/*  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");*/}
        {/*`}*/}
        {/*</Script>*/}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID as string} />
        )}
      </>
    );
  }

  return <Cookies onAccept={onAccept} onReject={onReject} />;
};

export { Tags };
