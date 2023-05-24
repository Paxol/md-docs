import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

import { Editor } from "~/components/Editor";
import { Button } from "~/components/primitives/Button";

const App: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") void router.push("/");

  const [md, setMd] = useState<string | undefined>(`# Title

  Small summary of the doc
  
  ## Subtitle
  
  Content here
  
  \`\`\`
  Block of code
  \`\`\`
  `);

  return (
    <>
      <Head>
        <title>MD Docs - App</title>
        <meta name="description" content="Manage markdown documentation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <header className="container mx-auto flex items-center gap-4 border-b p-4">
          <h1 className="text-center text-xl font-extrabold leading-none text-primary">
            MD Docs
          </h1>
          <div className="flex-1"></div>
          {session?.user.name}{" "}
          <Button variant="outline" onClick={() => void signOut()}>
            Logout
          </Button>
        </header>

        <main className="container mx-auto flex flex-1 flex-col items-center justify-center gap-4 p-4">
          <Editor value={md} onChange={setMd} />
        </main>
      </div>
    </>
  );
};

export default App;
