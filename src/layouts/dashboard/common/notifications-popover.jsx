import { useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
// import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

import { formatAgo } from '../../../utils/format-time';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import useNotification from '../../../hooks/useNotification';

// ----------------------------------------------------------------------

export default function NotificationsPopover({ user }) {
  const [open, setOpen] = useState(false);
  const email = user?.email;    // optional chaining operator (?.)
  const { notifications, updateRecord } = useNotification(email);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);   // popover 띄우는 방향
    // console.log(notifications);
  };
  const handleClose = () => { setOpen(false); };
  const handleMarkAllAsRead = () => {
    notifications.forEach(noti => {
      updateRecord.mutate({...noti, status: '읽음'})
    });
  };

  return (
    <>
      {notifications && 
      (notifications.length > 0) ? (
        <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen}>
          <Badge badgeContent={notifications.length} color="error">
            <Iconify width={24} icon="solar:bell-bing-bold-duotone" />
          </Badge>
        </IconButton> ) : (
        <IconButton color='default'>
          <Iconify width={24} icon="solar:bell-bing-bold-duotone" />
        </IconButton> )
      }

      {notifications &&
        <Popover open={!!open} anchorEl={open} onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{ sx: { mt: 1.5, ml: 0.75, width: 360, }, }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">Notifications</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {notifications.length}개의 읽지 않은 알림이 있습니다.
              </Typography>
            </Box>

            {notifications.length > 0 && (
              <Tooltip title=" 모두 읽음으로 변경">
                <IconButton color="primary" onClick={handleMarkAllAsRead}>
                  <Iconify icon="eva:done-all-fill" />
                </IconButton>
              </Tooltip>
            )}
          </Box>

          <Divider sx={{ borderStyle: 'dashed' }} />

          {notifications && notifications.length > 0 &&
            <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
              <List disablePadding>
                {notifications.map((notification) => (
                  <NotificationItem key={notification.nid} notification={notification} />
                ))}
              </List>
            </Scrollbar>
          }
        </Popover>
      }
    </>
  );
}

// ----------------------------------------------------------------------

function NotificationItem({ notification }) {
  const { icon, title } = renderContent(notification);

  return (
    <ListItemButton
      sx={{ py: 1.5, px: 2.5, mt: '1px',
        ...(notification.isUnRead && { bgcolor: 'action.selected', }),
      }}
    >
      <ListItemAvatar>
        {/* <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar> */}
        <Iconify width={36} icon={icon} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography variant="caption"
            sx={{ mt: 0.5, display: 'flex', alignItems: 'center', color: 'text.disabled', }}
          >
            <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
            {formatAgo(notification.createdAt, 'ko')}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.type}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {notification.description}
      </Typography>
    </Typography>
  );

  if (notification.type === '주문') {
    return {
      icon: 'hugeicons:package-process',
      title,
    };
  }
  if (notification.type === '사용자') {
    return {
      icon: 'ion:person-sharp',
      title,
    };
  }
  if (notification.type === '메세지') {
    return {
      icon: 'mage:we-chat',
      title,
    };
  }
  if (notification.type === '오류') {
    return {
      icon: 'mdi:error',
      title,
    };
  }
}
