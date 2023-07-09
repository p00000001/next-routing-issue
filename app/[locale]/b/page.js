import Link from "next/link";


export default async function PageB() {
    console.log("Page B");
    return (
        <div>
            <h1>Page B</h1>
            <Link href={"/a"} prefetch={false}>Page A</Link><br />
            Page B<br />
            <Link href={"/c"} prefetch={false}>Page C</Link><br />
            <Link href={"/d"} prefetch={false}>Page D</Link><br />
        </div>
    )
}
