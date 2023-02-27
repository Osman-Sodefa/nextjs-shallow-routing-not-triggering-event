import { ProblemPage } from "../components/ProblemPage";

export default function Home() {
  return (
    <ProblemPage
      nextRoute={() => `/`}
      // we're using `a` instead of `Link` because otherwise the problem isn't triggered
      link={<a href="/xxx">To not working example</a>}
    />
  );
}
