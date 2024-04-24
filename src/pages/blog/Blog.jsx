import "./Blog.css";
import blogBg from "./blogBg/blog.jpg";
import articale1 from "./blogImges/article-1.jpg";
import articale2 from "./blogImges/article-2.jpg";
import articale3 from "./blogImges/article-3.jpg";
import articale4 from "./blogImges/article-4.jpg";
import articale5 from "./blogImges/article-5.jpg";
// Arrow Icon
import { MdArrowForwardIos } from "react-icons/md";
function Blog() {
  return (
    <>
      <section className="bolg my-5">
        <div className="mainText">
          <h1 className="text-center fw-bold">#readmore</h1>
          <p className="text-center">
            Read all case studies about our products!
          </p>
        </div>
        <div className="banner">
          <img src={blogBg} className="opacity-50" alt="" />
        </div>
        {/* Articales */}
        <div
          className="container text-light articales"
          style={{ marginTop: "7rem" }}
        >
          <div className="row">
            {/* Articale One */}
            <div className="col-lg-6 col-md-12">
              <img src={articale1} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 mt-2">
              <h1>The cotton - Jersey zip-Up hoodie</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur minima iste quidem quisquam facere ea, explicabo
                eos velit? Quo, ex.
              </p>
              <button type="button" className="btn">
                Continue reading <MdArrowForwardIos className="ms-1" />
              </button>
            </div>
            {/* Two Artical */}
            <div className="col-lg-6 col-md-12 mt-5">
              <img src={articale2} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 mt-5">
              <h1>How to style a Quiff?</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas deleniti deserunt veritatis dolorem eos molestiae
                quidem, eum, enim expedita magni unde mollitia maiores magnam
                placeat blanditiis. Quaerat hic temporibus corrupti quasi porro
                voluptatibus, corporis placeat beatae minima enim sapiente
                soluta repudiandae officiis impedit dolor nobis sunt accusantium
                sequi eum vitae.
              </p>
              <button type="button" className="btn">
                Continue reading <MdArrowForwardIos className="ms-1" />
              </button>
            </div>
            {/* Three Artical */}
            <div className="col-lg-6 col-md-12 mt-5">
              <img src={articale3} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 mt-5">
              <h1>Must-have skater girl items</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                aut laboriosam culpa sunt cum iure tempora blanditiis nesciunt
                eos ut voluptatibus labore, consectetur, aliquam doloribus
                placeat minima. Voluptatum, pariatur natus aperiam temporibus
                repellendus, eligendi ullam, aspernatur minima aliquid
                laudantium a?
              </p>
              <button type="button" className="btn">
                Continue reading <MdArrowForwardIos className="ms-1" />
              </button>
            </div>
            {/* Four Artical */}
            <div className="col-lg-6 col-md-12 mt-5">
              <img src={articale4} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 mt-5">
              <h1>Runway-inspired trends</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                odio aspernatur quia magni, corrupti iusto vero asperiores odit
                atque neque nemo mollitia minima nostrum sit maiores quidem
                tempore quaerat? Fugit necessitatibus, incidunt blanditiis
                laudantium consequatur quod adipisci ad laboriosam! Molestiae,
                ullam illo unde mollitia necessitatibus in fugiat ipsam suscipit
                enim, dolores veritatis quae voluptates quisquam asperiores hic,
                reiciendis a aliquid atque labore consequuntur! Dolores,
                voluptatibus!
              </p>
              <button type="button" className="btn">
                Continue reading <MdArrowForwardIos className="ms-1" />
              </button>
            </div>
            {/* Five Articale */}
            <div className="col-lg-6 col-md-12 mt-5">
              <img src={articale5} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 mt-5">
              <h1>Aw20 menswear trends</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                voluptatem distinctio eum repellendus consequuntur quasi quia,
                repudiandae, rerum et adipisci saepe dignissimos officiis iusto
                perspiciatis nisi incidunt ratione similique possimus!
              </p>
              <button type="button" className="btn">
                Continue reading <MdArrowForwardIos className="ms-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
