import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";

import { Button } from "~/components/primitives/Button";
import { Link } from "~/components/primitives/Link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen flex-col">
        <main className="container mx-auto flex flex-1 flex-col items-center justify-center gap-4 p-4">
          <h1 className="text-center text-5xl font-extrabold leading-none text-primary">
            MD Docs
          </h1>
          <h2 className="text-center text-2xl font-bold leading-none text-secondary">
            Manage markdown documentation
          </h2>

          <Button onClick={() => signIn("azure-ad")}>
            Login with Microsoft
          </Button>
        </main>

        <Link className="text-lg" href="http://github.com/Paxol/md-docs">
          Checkout on{" "}
          <span className="inline-flex items-center pl-1 text-accent">
            <AiFillGithub className="inline" /> GitHub
          </span>
        </Link>
      </div>
    </>
  );
};

export default Home;
