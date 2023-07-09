import Link from "next/link";


export default async function PageC() {
    console.log("Page D");
    return (
        <div>
            <h1>Page D</h1>
            <Link href={"/a"} prefetch={false}>Page A</Link><br />
            <Link href={"/b"} prefetch={false}>Page B</Link><br />
            <Link href={"/c"} prefetch={false}>Page C</Link><br />
            Page D
        </div>
    )
}
