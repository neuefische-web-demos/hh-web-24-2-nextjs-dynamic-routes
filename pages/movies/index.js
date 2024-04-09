import Link from "next/link";
import Head from "next/head";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";


export default function Movies() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Head>
        <title>List of Movies</title>
        </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map( ({ id, slug, title }) => (
        <li key={id}>
          <Link href={`/movies/${slug}`}>{title}</Link>
        </li>
        ))}
      </ul>
    </>
  );
}
