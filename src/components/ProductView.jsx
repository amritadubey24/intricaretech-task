import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ProductView = () => {
    const { state: product } = useLocation();

    if (!product) {
        return (
            <Container className="mt-4">
                <h2>Product not found</h2>
            </Container>
        );
    }

    return (
        <section className="pwd_cardWrapper">
            <Container className="mt-4">
                <div className="pwd_FormCard">
                    <h1>{product.title || "No Title"}</h1>
                    <h2>Price: ${product.price || 0}</h2>
                    <p>Category: {product.category || "N/A"}</p>
                    {product.image && (
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ maxWidth: "200px", marginBottom: "20px" }}
                        />
                    )}
                    <p>{product.description || "No description available."}</p>
                    <p>
                        Rating: {product.rating?.rate || 0} (Count:{" "}
                        {product.rating?.count || 0})
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default ProductView;
