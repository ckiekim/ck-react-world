import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import useMesssage from '../../hooks/useMessage';
import useNotification from '../../hooks/useNotification';

export default function MessageReplyDialog({ message }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const { insertRecord, updateRecord } = useMesssage();
  const { refetchNoti } = useNotification(message.dstEmail);

  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { 
    setContent('');
    setOpen(false); 
    updateRecord.mutate({ ...message, status: '읽음' });
    refetchNoti();
  };
  const handleChange = e => { setContent(e.target.value); };
  const handleSubmit = e => {
    e.preventDefault();
    const replyMessage = { 
      content, 
      srcEmail: message.dstEmail, srcName: message.dstName, srcAvatar: message.dstAvatar,
      dstEmail: message.srcEmail, dstName: message.srcName, dstAvatar: message.srcAvatar,
    };
    // console.log(replyMessage);
    insertRecord.mutate(replyMessage);
    setContent('');
    setOpen(false);
    updateRecord.mutate({ ...message, status: '응답' });
  };

  return (
    <>
      <Link href='#'
        sx={{ color: 'inherit', textDecoration: 'none',
          '&:hover': { cursor: 'pointer', textDecoration: 'underline', },
        }}
        onClick={handleClickOpen}>
        <Typography>
          {message.content.length > 50 ? message.content.substring(0, 49) + '...' : message.content}
        </Typography>
      </Link>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography sx={{fontWeight: 'bold', fontSize: 18}}>응답 메세지</Typography>
        </DialogTitle>
        <IconButton aria-label="close" onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, }} >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Stack 
            spacing={2} alignItems="center"
            sx={{ width: isSmUp ? '40ch' : 'auto' }} 
          >
            <Stack spacing={2} direction='row' alignItems='center'>
              <Avatar alt={message.srcName} src={message.srcAvatar} /> 
              <Typography>{message.srcName}</Typography>
            </Stack>
            <TextField margin="dense" multiline fullWidth
              label="받은 메세지" type="text" value={message.content}
            />
            <TextField required margin="dense" id="content" multiline
              name="content" label="응답 메세지" type="text" fullWidth
              defaultValue={content} onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained">응답</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}