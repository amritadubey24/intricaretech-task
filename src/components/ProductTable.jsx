import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TextField } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import { Row, Col, Button } from "react-bootstrap";

export default function ProductTable() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    // Load products from API + localStorage on mount
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("myProducts")) || [];

        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                const combined = [...data, ...localData];
                setProducts(combined);
                setFiltered(combined);
            });
    }, []);

    // Append new product if added from form
    useEffect(() => {
        if (location.state?.newProduct) {
            const newProd = { ...location.state.newProduct };

            // Handle image if it's a File
            if (newProd.image instanceof File) {
                newProd.image = URL.createObjectURL(newProd.image);
            }

            if (!newProd.title) newProd.title = "No Title";
            if (!newProd.image) newProd.image = "/placeholder.png";
            if (!newProd.id) newProd.id = Date.now(); // unique ID

            setProducts((prev) => {
                const updated = [...prev, newProd];

                // Save only custom products to localStorage
                const customProducts = updated.filter((p) => p.id > 20);
                localStorage.setItem("myProducts", JSON.stringify(customProducts));

                return updated;
            });

            setFiltered((prev) => [...prev, newProd]);
        }
    }, [location.state]);

    // Search filter
    useEffect(() => {
        setFiltered(
            products.filter((p) => p.title?.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, products]);

    // Delete with confirmation
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;

        // Remove from state
        const updatedProducts = products.filter((p) => p.id !== id);
        setProducts(updatedProducts);
        setFiltered(updatedProducts);

        // Remove from localStorage if custom product
        const localData = JSON.parse(localStorage.getItem("myProducts")) || [];
        const updatedLocal = localData.filter((p) => p.id !== id);
        localStorage.setItem("myProducts", JSON.stringify(updatedLocal));

        // Optional: delete API product
        if (id <= 20) {
            fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
        }
    };

    return (
        <section className="pwd_cardWrapper">
            <Container className="mt-4">
                <Row className="mb-3">
                    <Col lg={6}>
                        <h2>Products</h2>
                    </Col>
                    <Col lg={6} className="text-end">
                        <Button variant="primary" className="text-end" onClick={() => navigate("/add")}>
                            + Add Product
                        </Button>
                    </Col>
                </Row>

                <TextField
                    label="Search Products"
                    fullWidth
                    className="mb-3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Table striped bordered hover>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtered.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <img src={product.image || "/placeholder.png"} alt={product.title} width="50" />
                                </TableCell>
                                <TableCell>{product.title || "No Title"}</TableCell>
                                <TableCell>${product.price || 0}</TableCell>
                                <TableCell>{product.category || "N/A"}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => navigate(`/view/${product.id}`, { state: product })}>
                                        <Visibility />
                                    </IconButton>
                                    <IconButton onClick={() => navigate(`/edit/${product.id}`, { state: product })}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(product.id)}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </section>
    );
}
