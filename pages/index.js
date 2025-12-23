//import Head from "next/head";
// import BottomPage from "../components/BottomHalf";
// import Features from "../components/Features";
// import MainNavigation from "../components/MainNavigation";
//import Menu from "../components/Menu";
import dynamic from "next/dynamic";
import React from "react";

export default function HomePage() {

  // const [user, loading] = useAuthState(firebase.auth())
  
  // console.log("Loading:" ,loading, "|", "Current User:" ,user)
const MainNavigation = dynamic(() => import("../components/MainNavigation"), {
  ssr: false,
});
const Features = dynamic(() => import("../components/Features"), {
  ssr: false,
});
const BottomPage = dynamic(() => import("../components/BottomHalf"), {
  ssr: false,
});
  

  return (
    // <div>Test Page</div>
    <>
        <MainNavigation />
        <Features />
        <BottomPage />
    </>
  );
}
