import { useState } from 'react';

import { alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import LoginDialog from './login-dialog';
import UserInfo2InsertDialog from './userInfo2-insert-dialog';
// import { account } from '../../../_mock/account';
import useUserInfo from '../../../sections/userInfo/useUserInfo';

const MENU_OPTIONS = [
  { label: 'Home', icon: 'eva:home-fill', },
  { label: 'Profile', icon: 'eva:person-fill', },
];

export default function AccountPopover({ user, logout, callback }) {
  const [open, setOpen] = useState(null);
  const { getRecord: { data: account } } = useUserInfo(user);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  }
  const handleClose = () => {
    setOpen(null);
  }
  const handleLogout = () => {
    setOpen(null);
    sessionStorage.clear();
    logout();
  }

  return (
    <>
      {!user && <LoginDialog callback={callback} />}
      {user && <>
        <IconButton onClick={handleOpen}
          sx={{ width: 40, height: 40,
            background: (theme) => alpha(theme.palette.grey[500], 0.08),
            ...(open && {
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            }),
          }}
        >
          {account && 
            <Avatar src={account.avatarUrl} alt={account.displayName}
              sx={{ width: 36, height: 36,
                border: (theme) => `solid 2px ${theme.palette.background.default}`,
              }}
            >
              {account.displayName.charAt(0).toUpperCase()}
            </Avatar>
          }
        </IconButton>

        <Popover open={!!open} anchorEl={open} onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ p: 0, mt: 1, ml: 0.75, width: 200, }}
        >
          {account && 
            <Box sx={{ my: 1.5, px: 2 }}>
              <Typography variant="subtitle2" noWrap>
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                {account.email}
              </Typography>
            </Box>
          }

          <Divider sx={{ borderStyle: 'dashed' }} />

          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}

          <UserInfo2InsertDialog callback={setOpen} />

          <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

          <MenuItem disableRipple disableTouchRipple
            onClick={handleLogout}
            sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
          >
            Logout
          </MenuItem>
        </Popover>
      </>}
    </>
  );
}
