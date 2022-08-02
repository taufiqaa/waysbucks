import Header from "../molecules/header";
import background from '../../assets/background.svg';
// import Order from "../molecules/content";

export default function Home() {
  return (
    <>
    <Header />
    <main className="max-1440p after-nav">
      <section>
        <article className="waysbucks-heading txt-white">
          <h1>WAYSBUCKS</h1>
          <h4>Things are changing, but we're still here for you</h4>
          <p>We have temporarily closed our in-store cafes, but select
            <br />grocery and drive-thru locations remaining open.
            <br />Waysbucks Drivers is also available</p>
          <p>Let's Order...</p>
        </article>
      </section>
    </main>
    {/* <Order  /> */}
    </>
  )
}
