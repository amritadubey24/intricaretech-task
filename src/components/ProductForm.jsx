import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ProductForm({ isEdit }) {
    const navigate = useNavigate();
    const { state: product } = useLocation();

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        category: "",
        description: "",
        rating: { rate: "", count: "" },
        image: null,
    });
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (product && isEdit) {
            setFormData({
                title: product.title || "",
                price: product.price || "",
                category: product.category || "",
                description: product.description || "",
                rating: {
                    rate: product.rating?.rate || "",
                    count: product.rating?.count || "",
                },
                image: product.image || null,
            });

            // If product.image is a URL string, set preview to it
            setPreview(typeof product.image === "string" ? product.image : null);
        }
    }, [product, isEdit]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (["rate", "count"].includes(name)) {
            setFormData((prev) => ({
                ...prev,
                rating: { ...prev.rating, [name]: value },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, image: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("price", formData.price);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("rate", formData.rating.rate);
        data.append("count", formData.rating.count);
        if (formData.image) data.append("image", formData.image);

        const url = isEdit
            ? `https://fakestoreapi.com/products/${product.id}`
            : "https://fakestoreapi.com/products";

        const response = await fetch(url, {
            method: isEdit ? "PUT" : "POST",
            body: data,
        });

        const savedProduct = await response.json();

        navigate("/product", { state: { newProduct: savedProduct } });
    };

    return (
        <>
            <section className="pwd_cardWrapper ">
                <Container className="mt-4">
                    <Row>
                        <Col lg={12}>
                            <div className="pwd_titleBlock">
                                <h2>{isEdit ? "Edit Product" : "Add Product"}</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className="pwd_FormCard">
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder="Enter product title"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="Enter price"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            placeholder="Enter category"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Upload Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                        {preview && (
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                style={{ marginTop: 10, maxHeight: 100 }}
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Rating Rate</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="rate"
                                            value={formData.rating.rate}
                                            onChange={handleChange}
                                            placeholder="Rate"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Rating Count</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="count"
                                            value={formData.rating.count}
                                            onChange={handleChange}
                                            placeholder="Count"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter product description"
                                />
                            </Form.Group>

                            <div className="text-end">
                                <Button type="submit" variant="primary">
                                    {isEdit ? "Update" : "Add"}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Container>
            </section>
        </>
    );
}
