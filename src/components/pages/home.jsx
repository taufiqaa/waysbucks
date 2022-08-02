import Header from "../molecules/header";
import imgBackground from '../../assets/background.png';
// import Order from "../molecules/content";

export default function Home() {
  return (
    <>
    <Header />
    <main className="max-1440p pt1">
      <section className="heading mt1-5 mx10">
        <div className="br10 flex-col jc-center">
          <article className="ml3 txt-white">
            <h1 className="bold fs3-25 bold">WAYSBUCKS</h1>
            <h4 className="mt1 fw300">Things are changing, but we're still here for you</h4>
            <p className="mt1-5 fw300">We have temporarily closed our in-store cafes, but select
              <br />grocery and drive-thru locations remaining open.
              <br /><strong>Waysbucks</strong> Drivers is also available</p>
            <p className="mt2 fw300">Let's Order...</p>
          </article>
          <img src={imgBackground} alt="heading-pattern" />
        </div>
      </section>
    </main>
    {/* <Order  /> */}
    </>
  )
}
