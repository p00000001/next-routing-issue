import Link from "next/link";


export default async function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href={"/a"} prefetch={false}>Page A</Link><br />
            <Link href={"/b"} prefetch={false}>Page B</Link><br />
            <Link href={"/c"} prefetch={false}>Page C</Link><br />
            <Link href={"/d"} prefetch={false}>Page D</Link><br />
        </div>
    )
}
