import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const AddProductPage = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [status, setStatus] = useState('');

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const addProduct = () => {
    if (productId && productName && category && price && stock && imagePath && status) {
      const newProduct = {
        id: products.length + 1,
        productId,
        productName,
        category,
        price,
        stock,
        imagePath,
        status,
        date: new Date().toLocaleDateString(),
      };
      setProducts([...products, newProduct]);
      clearFields();
    } else {
      alert('Please fill in all fields');
    }
  };

  const clearFields = () => {
    setProductId('');
    setProductName('');
    setCategory('');
    setPrice('');
    setStock('');
    setImagePath('');
    setStatus('');
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#f0f0f0' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Inventory Management Portal</Typography>
        <div>
          <Button variant="text" style={{ marginRight: '20px' }}>Dashboard</Button>
          <Button variant="text" style={{ marginRight: '20px' }}>Add Users</Button>
          <Button variant="text" style={{ marginRight: '20px' }}>Add Categories</Button>
          <Button variant="text" style={{ marginRight: '20px' }}>Add Products</Button>
          <Button variant="text" style={{ marginRight: '20px' }}>Customers</Button>
        </div>
      </div>
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Product ID"
            variant="outlined"
            fullWidth
            value={productId}
            onChange={(event) => handleInputChange(event, setProductId)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            value={productName}
            onChange={(event) => handleInputChange(event, setProductName)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(event) => handleInputChange(event, setCategory)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            value={price}
            onChange={(event) => handleInputChange(event, setPrice)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Stock"
            variant="outlined"
            fullWidth
            value={stock}
            onChange={(event) => handleInputChange(event, setStock)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Image Path"
            variant="outlined"
            fullWidth
            value={imagePath}
            onChange={(event) => handleInputChange(event, setImagePath)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Status"
            variant="outlined"
            fullWidth
            value={status}
            onChange={(event) => handleInputChange(event, setStatus)}
          />
        </Grid>
        <Grid item xs={11}>
          <Button variant="contained" color="primary" onClick={addProduct}>
            Add Product
          </Button>
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Products
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Product ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Image Path</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.productId}</TableCell>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.imagePath}</TableCell>
                  <TableCell>{product.status}</TableCell>
                  <TableCell>{product.date}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => removeProduct(product.id)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AddProductPage;
