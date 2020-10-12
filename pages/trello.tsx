import React from "react";
import Header from "./layouts/menu";
import Head from "next/head";
import CardGroup from "./components/trello/CardGroup";

export default function Trello() {
  return (
      <div>
          <Head>
              <title>Trello</title>
          </Head>
          <Header />
          <h1>Trello</h1>
          <CardGroup/>
      </div>
  )
}
