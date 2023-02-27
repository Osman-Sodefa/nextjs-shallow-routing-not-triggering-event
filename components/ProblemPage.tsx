import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";

type ProblemPageProps = {
  link: ReactNode;
  nextRoute: (counter: number) => string;
};

export const ProblemPage: FC<ProblemPageProps> = ({ link, nextRoute }) => {
  const [routeChanges, setRouteChanges] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handler = () => {
      console.log("routeChangeComplete");
      setRouteChanges((prev) => prev + 1);
    };
    router.events.on("routeChangeComplete", handler);

    return () => router.events.off("routeChangeComplete", handler);
  }, [router.events]);

  return (
    <div
      style={{
        display: "flex",
        rowGap: "12px",
        flexDirection: "column",
        margin: "12px",
      }}
    >
      <div>Counter: {routeChanges}</div>
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          type="button"
          onClick={() =>
            router.push(nextRoute(routeChanges), undefined, { shallow: true })
          }
        >
          Shallow Push
        </button>
        <button
          type="button"
          onClick={() =>
            router.replace(nextRoute(routeChanges), undefined, {
              shallow: true,
            })
          }
        >
          Shallow Replace
        </button>

        <button
          type="button"
          onClick={() => router.push(nextRoute(routeChanges))}
        >
          Push
        </button>
        <button
          type="button"
          onClick={() => router.replace(nextRoute(routeChanges))}
        >
          Replace
        </button>
      </div>
      <div>{link}</div>
    </div>
  );
};
