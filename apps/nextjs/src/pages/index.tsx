import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";

import { Button } from "~/components/primitives/Button";
import { Link } from "~/components/primitives/Link";

const Home: NextPage = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") void router.push("/app");

  return (
    <>
      <Head>
        <title>MD Docs</title>
        <meta name="description" content="Manage markdown documentation" />
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

          <Button onClick={() => void signIn("azure-ad", {})}>
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
