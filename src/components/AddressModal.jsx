import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  left: '50%',
  top:"30%",
  width : "50%", 
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className='bg-amber-400' onClick={handleOpen}>Open modal</Button>
      <Modal className=''
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1 className='font-bold text-xl'>Address Details</h1>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <input className=' focus:outline-none bg-gray-50 w-full p-2' type="text" name="" id="" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}