import React, { useState } from "react";
import { MuiFileInput } from 'mui-file-input';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Iconify from '../../components/iconify';
import useProducts from './useProducts';
import { uploadImage } from "../../api/cloudinary";

export default function ProductInsertForm() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();
  const [product, setProduct] = useState({ name:'', price:'', color:'#00AB55', status:'new' });
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { 
    setOpen(false); 
    setProduct({ name:'', price:'', color:'#00AB55', status:'new' });
    setFile();
  };
  const handleChange = e => {
    setProduct({...product, [e.target.name]: e.target.value});
  }
  const handleUpload = newFile => {
    setFile(newFile);
    uploadImage(newFile)
      .then(url => setProduct({...product, ['cover']: url}));
  }
  const { insertRecord } = useProducts();
  const handleSubmit = e => {
    // console.log(product);
    const { name, price, color, status, cover } = product;
    const newProduct = { name, price: Number.parseInt(price), priceSale: Number.parseInt(price)*0.9,
      status, cover, colors: [color] };
    insertRecord.mutate(newProduct);
    handleClose();
  }

  return (
    <>
      <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}
        onClick={handleClickOpen}>
        New Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography sx={{fontWeight: 'bold', fontSize: 18}}>상품 추가</Typography>
        </DialogTitle>
        <IconButton aria-label="close" onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, }} >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Stack spacing={2} sx={{ width: '40ch' }} alignItems="center">
            {file && <img src={product.cover} alt='product' width='80%' />}
            <TextField autoFocus required margin="dense" id="name"
              name="name" label="상품명" type="text" fullWidth
              defaultValue={product.name} onChange={handleChange}
            />
            <TextField required margin="dense" id="price"
              name="price" label="가격" type="text" fullWidth
              defaultValue={product.price} onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="color">색상</InputLabel>
              <Select required margin="dense" name='color' label="색상" id='color'
                defaultValue={product.color} onChange={handleChange}>
                {['#00AB55','#000000','#FFFFFF','#FFC0CB','#FF4842','#1890FF',
                  '#94D82D','#FFC107'].map((item) => 
                    <MenuItem value={item} key={item} alignItems='center'>
                      <Stack spacing={2} direction='row' alignItems='center'>
                        <Box sx={{ width: 16, height: 16, bgcolor: item, borderRadius: '50%',
                            border: 'solid 2px' }} />
                        <Typography>{item}</Typography>
                      </Stack>
                    </MenuItem>
                  )}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="status">상태</InputLabel>
              <Select required margin="dense" name='status' label="상태" id='status'
                defaultValue={product.status} onChange={handleChange}>
                {['sale', 'new', 'default'].map((item) => 
                    <MenuItem value={item} key={item}>{item}</MenuItem>
                  )}
              </Select>
            </FormControl>
            <MuiFileInput required margin="dense" id="photo"
              label='상품 사진' value={file} name='file' fullWidth
              onChange={handleUpload} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained">등록</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}