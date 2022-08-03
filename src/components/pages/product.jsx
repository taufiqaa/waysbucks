import Header from "../molecules/header";
import clip from "../../assets/clip.svg"

export default function AddProduct() {
  return (
    <>
    <Header />
    <main className="after-nav">
        <section className="pt3 flex jc-between ai-start">
            <form className="w100 flex-col mx5">
                <h2 className="mb3 txt-red fw700">Product</h2>
                <input className="modal-input mb1-5 br-red br5" type="text" placeholder="Name Product" required />
                <input className="modal-input mb1-5 br-red br5" type="text" placeholder="Price" required />
                <input type="file" name="photo-product" id="photo-product" hidden required/>

                <label className="input mb4 flex jc-between ai-center" htmlFor="photo-product">
                    <p>Photo Product</p>
                    <img src={clip} alt="clip" />
                </label>
                <div className="flex jc-center">
                  <button className="input-button bg-red br-none br5 txt-white fw500">Add Product</button>
                </div>
            </form>
            <img className="input-product" src="https://picsum.photos/200/300" alt="product" />
        </section>
    </main>
    </>
  )
}
