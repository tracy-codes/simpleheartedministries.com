import Head from "next/head";

export default function Home() {
    return (
        <div className="container text-center mx-auto px-4 py-12 space-y-8 text-lg md:text-xl">
            <Head>
                <title>Simplehearted Ministries</title>
            </Head>
            <div>
                <h1 className="text-3xl md:text-4xl font-bold uppercase">
                    Simplehearted Ministries Inc.
                </h1>
            </div>
            <div>
                <p>Address: 5779 Union Rd, Hahira, GA, 31632</p>
                <a href="tel:9123881896" className="underline">
                    (912) 388-1896
                </a>
                <br />
                <a
                    href="mailto:simpleheartedministries@gmail.com"
                    className="underline"
                >
                    Simpleheartedministries@gmail.com
                </a>
            </div>
            <div>
                <p>Date of Formation: 06/18/2001</p>
                <p>NON PROFIT 501c3 #58-2623982 Active</p>
            </div>
            <div>
                <p>
                    "Inspirational music for meditation and prayer"
                    <br />
                    Psalmist, Samuel Adams
                </p>
            </div>
        </div>
    );
}
