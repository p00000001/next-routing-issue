import Link from "next/link";


export default async function PageA() {
    console.log("Page A");
    return (
        <div>
            <h1>Page A</h1>
            Page A<br />
            <Link href={"/b"} prefetch={false}>Page B</Link><br />
            <Link href={"/c"} prefetch={false}>Page C</Link><br />
            <Link href={"/d"} prefetch={false}>Page D</Link><br />
        </div>
    )
}
