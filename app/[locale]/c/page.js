import Link from "next/link";


export default async function PageC() {
    console.log("Page C");
    return (
        <div>
            <h1>Page C</h1>
            <Link href={"/a"} prefetch={false}>Page A</Link><br />
            <Link href={"/b"} prefetch={false}>Page B</Link><br />
            Page C<br />
            <Link href={"/d"} prefetch={false}>Page D</Link><br />
        </div>
    )
}
