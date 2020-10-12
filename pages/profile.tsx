import React from "react";
import Header from "./layouts/menu";
import Avatar from "./components/profile/Avatar";
import Name from "./components/profile/Name";
import Hobby from "./components/profile/Hobby";
import Head from "next/head";

export default function Profile() {
  return (
      <div>
          <Head>
              <title>Mon Profile</title>
          </Head>
          <Header />
          <h1>Mon profile</h1>
          <Avatar/>
          <Name/>
          <Hobby/>
      </div>
  )
}
