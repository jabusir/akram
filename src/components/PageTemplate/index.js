import { Children } from "react/cjs/react.production.min";

export default function PageTempalte({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={iconHref || "/favicon.ico"} />
      </Head>
      <main>{children}</main>
    </>
  );
}
