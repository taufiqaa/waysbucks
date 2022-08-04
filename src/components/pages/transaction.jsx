import Header from "../molecules/header";

export function Income() {
  return (
    <>
    <Header />
    <main className="after-nav pb5">
        <section className="pt4 mx5">
            <h1 className="txt-red mb2-5">Income Transaction</h1>
            <table>
                <thead className="bg-gray">
                    <tr className="w100">
                        <th>No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Post Code</th>
                        <th>Income</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>Adam</td>
                        <td>xd</td>
                        <td>12345</td>
                        <td>Xx.000</td>
                        <td>Waiting Approve</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
    </>
  )
}
