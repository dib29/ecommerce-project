import React, { useState } from "react";
import { Link } from "react-router-dom";
import categoriesDetails from "../../Apis/CategoryApi";
import products from "../../Apis/ProductApi";

export default function SectionProductCategory() {
  const [product, setData] = useState(
    products.filter(
      (product) => product.categoryId == categoriesDetails[0].categoryId
    )
  );

  console.log("product0", product);
  function updateProduct(productIndex) {
    setData(
      products.filter(
        (product) =>
          product.categoryId == categoriesDetails[productIndex].categoryId
      )
    );
    console.log(product);
  }
  return (
    <div>
      <section className="section-name padding-y-sm">
        <div className="container">
          {/* propular product section  */}

          <div className="row">
            <aside className="col-md-3">
              <nav className="card">
                <ul className="menu-category">
                  {categoriesDetails.map(
                    (category, categoryUniqueIdentifier) => (
                      <li key={categoryUniqueIdentifier}>
                        <Link
                          to="#"
                          onClick={() =>
                            updateProduct(categoryUniqueIdentifier)
                          }
                        >
                          {category.categoryName}
                        </Link>
                      </li>
                    )
                  )}

                  <li className="has-submenu">
                    <Link to="#">More items</Link>
                    <ul className="submenu">
                      <li>
                        <Link to="#">Submenu name</Link>
                      </li>
                      <li>
                        <Link to="#">Great submenu</Link>
                      </li>
                      <li>
                        <Link to="#">Another menu</Link>
                      </li>
                      <li>
                        <Link to="#">Some others</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="row col-md-9">
              {product.map((product, productUniqueKey) => (
                <div key={productUniqueKey} className="col-md-4">
                  <div className="card card-product-grid">
                    <Link to={`/product/${product.productId}`}>
                      <div className="img-wrap">
                        <span className="wishlist">
                          <i className="bi bi-heart-fill"></i>
                        </span>
                        <img src="Assets/images/items/1.jpg" alt="item" />
                      </div>
                      <figcaption className="info-wrap">
                        <div className="title">{product.productName}</div>
                        <div className="price mt-1">{product.price}</div>
                      </figcaption>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
